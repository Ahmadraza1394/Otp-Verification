const otpStorage = new Map();

const saveOtp = (email, otp) => {
  otpStorage.set(email, { otp, expiresAt: Date.now() + 5 * 60 * 1000 });
};

const verifyOtp = (email, otp) => {
  const data = otpStorage.get(email);
  if (data && data.otp === otp && Date.now() < data.expiresAt) {
    otpStorage.delete(email); // OTP is verified and deleted
    return true;
  }
  return false;
};

module.exports = { saveOtp, verifyOtp };
