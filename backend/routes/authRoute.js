const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const jwt = require("jsonwebtoken");
const mysqlConnection = require("../config/db");
// const middleware = require("../middleware/middleware");

router.post("/register", async (req, res) => {
  const { username, email, password, role } = req.body;
  if (!username || !password || !email || !role) {
    return res.status(404).send("fill the details");
  }
  const hashPassword = await bcrypt.hash(password, 10);
  const mySqlQuery = "select * from user where username=?";
  mysqlConnection.query(mySqlQuery, [username], (err, result) => {
    if (err) {
      return res.send(400).status("error to check");
    }
    if (result.length > 0) {
      return res.send("User Already Exist plz login");
    }
    const createuser =
      "insert into user (username,email,password,role) values (?,?,?,?)";
    mysqlConnection.query(
      createuser,
      [username, email, hashPassword, role],
      (err, result) => {
        if (err) {
          console.log(err);
          return res.status(404).send("error to create");
        }
        if (result.affectedRows === 0) {
          return res.status(404).send("failed to create");
        }
        return res.status(200).send("user created ");
      }
    );
  });
});

router.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(404).send("fill the details");
  }

  const mySqlQuery = "select * from user where username=?";
  mysqlConnection.query(mySqlQuery, [username], async (err, result) => {
    if (err) {
      return res.status(404).send("error");
    }
    if (result.length > 0) {
      const comparePassword = await bcrypt.compare(
        password,
        result[0].password
      );
      const payload = {
        username,
        role: result[0].role,
      };
      if (comparePassword) {
        const token = jwt.sign(payload, "secret", { expiresIn: "30d" });
        return res.status(200).send({ token });
      } else {
        return res.status(404).send("invalid pwd");
      }
    } else {
      return res.send("user doesn't exist");
    }
  });
});
router.get("/userData", (req, res) => {
  const mySqlQuery = "select * from user";
  mysqlConnection.query(mySqlQuery, (err, result) => {
    if (err) {
      return res.status(404).send("error");
    }
    return res.status(200).send(result);
  });
});

module.exports = router;
