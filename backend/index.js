const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const dbConnection = require("./config/db");
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use("/api/auth", require("./routes/authRoute"));
app.use("/api/products", require("./routes/productRoute"));
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("server connected on", PORT);
});
