const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",

  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

async function sendContactConfirmation(userEmail, userName) {
  const mailOptions = {
    from: `Forwell Pharmaceuticals <${process.env.GMAIL_USER}>`,

    to: userEmail,

    replyTo: userEmail,

    subject: "Thank you for contacting Forwell Pharmaceuticals",

    html: `
      <h2>Hello ${userName},</h2>

      <p>
        Thank you for contacting
        <strong>Forwell Pharmaceuticals</strong>.
      </p>

      <p>
        We have received your enquiry successfully.
      </p>

      <p>
        Our team will get back to you soon.
      </p>

      <p>
        Regards,<br>
        Forwell Pharmaceuticals
      </p>
    `,
  };

  const info = await transporter.sendMail(mailOptions);

  return info;
}

module.exports = sendContactConfirmation;