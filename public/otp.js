document
  .getElementById("otpRequestForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value;

    fetch("/otp/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((response) => response.json())
      .then((data) => {
        document.getElementById("message").textContent = data.message;
      })
      .catch((err) => console.error(err));
  });

document
  .getElementById("otpVerifyForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const otp = document.getElementById("otp").value;
    const email = document.getElementById("email").value; // Email is required for OTP verification

    fetch("/otp/verify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, otp }),
    })
      .then((response) => response.json())
      .then((data) => {
        document.getElementById("message").textContent = data.message;
      })
      .catch((err) => console.error(err));
  });
