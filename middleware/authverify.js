//creating a middleware to verify token
const jwt = require("jsonwebtoken");

const authVerify = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: "Token not provided" });
  }

  // Extract ONLY the actual token after "Bearer"
  const token = authHeader.split(" ")[1];

  try {
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
    req.user = { userId: decodedToken.id };
    next();
  } catch (err) {
    console.error("Token verify error:", err);
    return res.status(401).json({ error: "Invalid or expired token" });
  }
};

module.exports = authVerify;
