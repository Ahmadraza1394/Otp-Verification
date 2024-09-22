const express = require("express");
const bodyParser = require("body-parser");
const otpRoutes = require("./routes/otpRoutes");
const app = express();

app.use(bodyParser.json());
app.use(express.static("public"));
app.use("/otp", otpRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
