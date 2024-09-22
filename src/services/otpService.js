const transporter = require("../config/mailConfig");

const sendOtpEmail = (email, otp) => {
  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: email,
    subject: "Your OTP Code",
    text: `Your OTP code is ${otp}. It is valid for 5 minutes.`,
  };

  return transporter.sendMail(mailOptions);
};

module.exports = { sendOtpEmail };
