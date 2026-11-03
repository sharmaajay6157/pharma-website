
const express = require("express");
const Razorpay = require("razorpay");
const crypto = require("crypto");
const Order = require("../models/order");
const sendOrderConfirmation = require("../utils/sendOrderConfirmation");

const router = express.Router();

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// CREATE RAZORPAY ORDER AND SAVE PENDING ORDER
router.post("/create-order", async function (req, res) {
  try {
    const {
      amount,
      customerDetails,
      products,
      subtotal,
      gstAmount,
      totalAmount,
    } = req.body;

    if (
      !Number.isFinite(Number(amount)) ||
      Number(amount) <= 0 ||
      !customerDetails ||
      !Array.isArray(products) ||
      products.length === 0
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid order or customer details.",
      });
    }

    const customerName = String(customerDetails.name || "").trim();
    const email = String(customerDetails.email || "").trim();
    const deliveryAddress = String(customerDetails.address || "").trim();

    if (
      customerName.length < 2 ||
      customerName.length > 100 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      email.length > 254 ||
      deliveryAddress.length < 10 ||
      deliveryAddress.length > 300
    ) {
      return res.status(400).json({
        success: false,
        message: "Please provide valid customer details.",
      });
    }

    const savedProducts = products.map(function (product) {
      const quantity = Number(product.quantity);
      const price = Number(product.price);
      const productName = String(product.name || "").trim();

      if (
        !product._id ||
        !productName ||
        !Number.isSafeInteger(quantity) ||
        quantity < 1 ||
        !Number.isFinite(price) ||
        price < 0
      ) {
        throw new Error("Invalid product details.");
      }

      return {
        productId: String(product._id),
        name: productName,
        quantity,
        price,
        lineTotal: Number((price * quantity).toFixed(2)),
      };
    });

    const calculatedSubtotal = Number(
      savedProducts
        .reduce(function (total, product) {
          return total + product.lineTotal;
        }, 0)
        .toFixed(2)
    );

    const calculatedGst = Number(
      (calculatedSubtotal * 0.18).toFixed(2)
    );

    const calculatedTotal = Number(
      (calculatedSubtotal + calculatedGst).toFixed(2)
    );

    if (
      !Number.isFinite(Number(subtotal)) ||
      !Number.isFinite(Number(gstAmount)) ||
      !Number.isFinite(Number(totalAmount)) ||
      Math.abs(Number(subtotal) - calculatedSubtotal) > 0.01 ||
      Math.abs(Number(gstAmount) - calculatedGst) > 0.01 ||
      Math.abs(Number(totalAmount) - calculatedTotal) > 0.01 ||
      Math.abs(Number(amount) - calculatedTotal) > 0.01
    ) {
      return res.status(400).json({
        success: false,
        message: "Order amount does not match the cart total.",
      });
    }

    const razorpayOrder = await razorpay.orders.create({
      amount: Math.round(calculatedTotal * 100),
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    });

    // Save customer and order details before checkout opens.
    const savedOrder = await Order.create({
      customerName,
      email,
      deliveryAddress,
      products: savedProducts,
      subtotal: calculatedSubtotal,
      gstAmount: calculatedGst,
      totalAmount: calculatedTotal,
      currency: "INR",
      razorpayOrderId: razorpayOrder.id,
      paymentStatus: "pending",
      confirmationEmailStatus: "pending",
      confirmationEmailError: "",
    });

    return res.status(200).json({
      success: true,
      order: razorpayOrder,
      databaseOrderId: savedOrder._id,
    });
  } catch (error) {
    console.error("Create order error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to create and save the order.",
    });
  }
});

// VERIFY PAYMENT, SAVE PAID ORDER, AND SEND CONFIRMATION EMAIL
router.post("/verify-payment", async function (req, res) {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    } = req.body;

    if (
      !razorpay_order_id ||
      !razorpay_payment_id ||
      !razorpay_signature
    ) {
      return res.status(400).json({
        success: false,
        message: "Required payment details are missing.",
      });
    }

    const order = await Order.findOne({
      razorpayOrderId: razorpay_order_id,
    });

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found.",
      });
    }

    // Verify the Razorpay checkout signature.
    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest();

    let receivedSignature;

    try {
      if (
        typeof razorpay_signature !== "string" ||
        !/^[a-fA-F0-9]{64}$/.test(razorpay_signature)
      ) {
        return res.status(400).json({
          success: false,
          message: "Payment verification failed.",
        });
      }

      receivedSignature = Buffer.from(razorpay_signature, "hex");
    } catch (signatureError) {
      return res.status(400).json({
        success: false,
        message: "Payment verification failed.",
      });
    }

    if (
      receivedSignature.length !== expectedSignature.length ||
      !crypto.timingSafeEqual(expectedSignature, receivedSignature)
    ) {
      return res.status(400).json({
        success: false,
        message: "Payment verification failed.",
      });
    }

    // Confirm payment details with Razorpay's API.
    const payment = await razorpay.payments.fetch(razorpay_payment_id);

    if (
      payment.order_id !== razorpay_order_id ||
      payment.amount !== Math.round(order.totalAmount * 100) ||
      payment.currency !== order.currency
    ) {
      return res.status(400).json({
        success: false,
        message: "Payment details do not match the order.",
      });
    }

    if (payment.status !== "captured") {
      return res.status(409).json({
        success: false,
        message:
          "Payment is not captured yet. Please check the payment status.",
        paymentStatus: payment.status,
      });
    }

    // Save payment information before attempting to send the email.
    order.razorpay_payment_id = razorpay_payment_id;
    order.paymentStatus = "paid";

    await order.save();

    let emailSent = false;
    let emailStatus = order.confirmationEmailStatus || "pending";

    /*
     * Atomically claim the email before sending it.
     * returnDocument: "after" replaces the deprecated new: true option.
     */
    const emailClaim = await Order.findOneAndUpdate(
      {
        _id: order._id,
        paymentStatus: "paid",
        $or: [
          {
            confirmationEmailStatus: {
              $in: [null, "pending", "failed"],
            },
          },
        ],
      },
      {
        $set: {
          confirmationEmailStatus: "sending",
          confirmationEmailError: "",
        },
      },
      {
        returnDocument: "after",
      }
    );

    if (emailClaim) {
      try {
        await sendOrderConfirmation(emailClaim);

        await Order.updateOne(
          {
            _id: emailClaim._id,
            confirmationEmailStatus: "sending",
          },
          {
            $set: {
              confirmationEmailStatus: "sent",
              confirmationEmailError: "",
            },
          }
        );

        emailSent = true;
        emailStatus = "sent";
      } catch (emailError) {
        console.error("Order confirmation email failed:", emailError);

        try {
          await Order.updateOne(
            {
              _id: emailClaim._id,
              confirmationEmailStatus: "sending",
            },
            {
              $set: {
                confirmationEmailStatus: "failed",
                confirmationEmailError: String(
                  emailError.message || "Email delivery failed."
                ).slice(0, 500),
              },
            }
          );
        } catch (statusError) {
          console.error(
            "Unable to update confirmation email status:",
            statusError
          );
        }

        emailStatus = "failed";
      }
    } else {
      // Another verification request may already have claimed or sent it.
      const latestOrder = await Order.findById(order._id).select(
        "confirmationEmailStatus"
      );

      emailStatus =
        latestOrder?.confirmationEmailStatus || "pending";
      emailSent = emailStatus === "sent";
    }

    return res.status(200).json({
      success: true,
      message: "Payment verified and order saved successfully.",
      razorpay_payment_id: order.razorpay_payment_id,
      orderId: order._id,
      paymentStatus: order.paymentStatus,
      emailSent,
      emailStatus,
      emailMessage:
        emailStatus === "sent"
          ? "Order confirmation email sent successfully."
          : emailStatus === "failed"
            ? "Payment succeeded, but the confirmation email could not be sent."
            : `Payment succeeded. Email status: ${emailStatus}`,
    });
  } catch (error) {
    console.error("Payment verification error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to verify payment at this time.",
    });
  }
});

module.exports = router;