
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",

  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

// Escape dynamic values before inserting them into HTML.
function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, function (char) {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };

    return entities[char];
  });
}

function formatINR(amount) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(amount);
}

async function sendOrderConfirmation(order) {
  const productRows = order.products
    .map(function (product) {
      return `
        <tr>
          <td style="padding:10px;border-bottom:1px solid #eee;">
            ${escapeHtml(product.name)}
          </td>
          <td style="padding:10px;border-bottom:1px solid #eee;text-align:center;">
            ${product.quantity}
          </td>
          <td style="padding:10px;border-bottom:1px solid #eee;text-align:right;">
            ${formatINR(product.price)}
          </td>
          <td style="padding:10px;border-bottom:1px solid #eee;text-align:right;">
            ${formatINR(product.lineTotal)}
          </td>
        </tr>
      `;
    })
    .join("");

  const mailOptions = {
    from: `Forwell Pharmaceuticals <${process.env.GMAIL_USER}>`,

    to: order.email,

    subject: `Order Confirmation - Forwell Pharmaceuticals (${order._id})`,

    html: `
      <div style="font-family:Arial,sans-serif;color:#333;max-width:700px;margin:auto;line-height:1.6;">

        <div style="background:#dc2626;color:white;padding:22px;text-align:center;">
          <h1 style="margin:0;">Forwell Pharmaceuticals</h1>
          <p style="margin:8px 0 0;">For your Wellness</p>
        </div>

        <div style="padding:24px;">
          <h2 style="color:#16a34a;">Payment Successful!</h2>

          <p>Hello ${escapeHtml(order.customerName)},</p>

          <p>
            Thank you for placing your order with
            <strong>Forwell Pharmaceuticals</strong>.
            Your payment has been verified successfully, and your order
            will be delivered within 5-7 days.
          </p>

          <h3>Order Details</h3>

          <p>
            <strong>Order ID:</strong> ${escapeHtml(order._id)}<br>
            <strong>Razorpay Order ID:</strong>
            ${escapeHtml(order.razorpayOrderId)}<br>
            <strong>Payment ID:</strong>
            ${escapeHtml(order.razorpay_payment_id)}<br>
            <strong>Payment Status:</strong>
            <span style="color:#16a34a;font-weight:bold;">PAID</span>
          </p>

          <h3>Products Purchased</h3>

          <table style="width:100%;border-collapse:collapse;font-size:14px;">
            <thead>
              <tr style="background:#f5f5f5;">
                <th style="padding:10px;text-align:left;">Product</th>
                <th style="padding:10px;text-align:center;">Qty</th>
                <th style="padding:10px;text-align:right;">Price</th>
                <th style="padding:10px;text-align:right;">Total</th>
              </tr>
            </thead>
            <tbody>
              ${productRows}
            </tbody>
          </table>

          <div style="margin-top:20px;text-align:right;">
            <p>Subtotal: ${formatINR(order.subtotal)}</p>
            <p>GST (18%): ${formatINR(order.gstAmount)}</p>
            <h3 style="color:#dc2626;">
              Total Paid: ${formatINR(order.totalAmount)}
            </h3>
          </div>

         <p> <h3>Delivery Address:-</h3>${escapeHtml(order.deliveryAddress)}</p>

          <p>
            Please keep this email for your records.
            Thank you for choosing Forwell Pharmaceuticals.
          </p>

          <p>
            Regards,<br>
            <strong>Forwell Pharmaceuticals</strong><br>
          </p>
        </div>
      </div>
    `,
  };

  return transporter.sendMail(mailOptions);
}

module.exports = sendOrderConfirmation;
