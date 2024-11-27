const jwt = require("jsonwebtoken");
const authMiddleware = async (req, res, next) => {
  const headers = req.headers;
  if (headers.authorization || headers) {
    const token = headers.authorization.split(" ")[0];
    if (!token) return res.status(403).send("no token");
    const decode = await jwt.verify(token, "secret");
    if (decode) {
      req.user = decode;
      next();
      return;
    }
  }
  return res.status(404).send("invalid token");
};
module.exports = authMiddleware;
