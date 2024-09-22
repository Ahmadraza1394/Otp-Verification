const { sendOtpEmail } = require("../services/otpService");
const { saveOtp, verifyOtp } = require("../otpStorage");

const generateOtp = () =>
  Math.floor(100000 + Math.random() * 900000).toString();

const sendOtp = (req, res) => {
  const { email } = req.body;
  const otp = generateOtp();

  sendOtpEmail(email, otp)
    .then(() => {
      saveOtp(email, otp);
      res.json({ message: "OTP sent to your email!" });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ message: "Error sending OTP" });
    });
};

const verifyOtpCode = (req, res) => {
  const { email, otp } = req.body;

  if (verifyOtp(email, otp)) {
    res.json({ message: "OTP verified successfully!" });
  } else {
    res.json({ message: "Invalid or expired OTP" });
  }
};

module.exports = { sendOtp, verifyOtpCode };
