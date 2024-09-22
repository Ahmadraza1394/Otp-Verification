const express = require("express");
const { sendOtp, verifyOtpCode } = require("../controllers/otpController");
const router = express.Router();

router.post("/send", sendOtp);
router.post("/verify", verifyOtpCode);

module.exports = router;
