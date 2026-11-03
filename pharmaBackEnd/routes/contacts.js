const express = require("express");

const router = express.Router();

const Contact = require("../models/contact");
const sendContactConfirmation = require("../services/emailService");

// POST contact form
router.post("/", async function (req, res) {

  try {

    // Create contact
    const contact = new Contact({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      subject: req.body.subject,
      message: req.body.message,
    });

    // Save contact to MongoDB
    const savedContact = await contact.save();

    console.log("Contact saved successfully");

    // Send confirmation email
    try {

      await sendContactConfirmation(
        req.body.email,
        req.body.name
      );

      //  Update MongoDB
      savedContact.emailSent = true;
      await savedContact.save();

      console.log("Confirmation email sent successfully");

      // Contact saved + email sent
      res.status(201).json({
        message: "Contact form submitted successfully",
        contact: savedContact,
        emailSent: true,
      });

    } catch (emailError) {

      // Contact is already saved, so don't treat
      // email failure as contact submission failure
      console.log(
        "Email sending failed:",
        emailError.message
      );

      // Contact saved but email failed
      res.status(201).json({
        message: "Contact form submitted successfully",
        contact: savedContact,
        emailSent: false,
      });
    }

  } catch (error) {

    // MongoDB save failed
    console.log(
      "Error saving contact:",
      error.message
    );

    res.status(500).json({
      message: "Error saving contact",
      error: error.message,
      emailSent: false,
    });
  }
});

module.exports = router;