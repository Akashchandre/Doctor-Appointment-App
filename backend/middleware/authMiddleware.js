const jwt = require("jsonwebtoken");
const User = require("../models/User");

const authMiddleware = async (req, res, next) => {
    const token = req.header("Authorization")?.split(" ")[1];
    if (!token || req.header("Authorization").split(" ")[0] !== "Bearer") {
        return res.status(401).json({ message: "No token, authorization denied or incorrect format" });
      }
 
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id).select("-password");
    next();
  } catch (error) {
    res.status(401).json({ message: "Token is not valid" });
  }
};

module.exports = authMiddleware;
