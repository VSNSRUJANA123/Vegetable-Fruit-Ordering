const { v4: uuidv4 } = require("uuid");
const express = require("express");
const router = express.Router();
const dbConnection = require("../config/db");
router.get("/", (req, res) => {
  const query = "select * from product";
  dbConnection.query(query, (err, result) => {
    if (err) {
      return res.status(403).send("err to retrieve");
    }
    return res.status(200).send(result);
  });
});
router.post("/order_details", (req, res) => {
  const { order_id, product_id, quantity, product_qunatity_price } = req.body;
  if (!order_id || !product_id || !quantity) {
    return res.status(403).send("required all fields");
  }
  
});
router.post("/order", (req, res) => {
  const {
    quantity,
    product_id,
    full_name,
    email,
    phone,
    country,
    address,
    total_price,
  } = req.body;
  const sqlQuery = "insert into ";
});
module.exports = router;
