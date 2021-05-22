const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();

const isAdmin = async (req, res, next) => {
  try {
    const token = req.header("x-auth-token");
    console.log(token);
    if (!token) {
      return res.status(404).send("Token not Found");
    } else {
      const decoded = await jwt.verify(token, process.env.SECRET);
      console.log("decoded", decoded);
      if (decoded.isAdmin) {
        next();
      }
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Token is not Correct");
  }
};

module.exports = isAdmin;
