import jwt from "jsonwebtoken";

const protect = async (req, res, next) => {
  console.log("AUTH HEADER:", req.headers.authorization);

  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.userId = decoded.userId;

    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: "Unauthorized" });
  }
};

export default protect;