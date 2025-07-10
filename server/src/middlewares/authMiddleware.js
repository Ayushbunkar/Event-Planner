import jwt from "jsonwebtoken";
import User from "../models/userModels.js";

export const Protect = async (req, res, next) => {
  try {
    const token = req.cookies.IDCard || "";
    console.log(token);

    if (!token) {
      const error = new Error("Unauthorized !! Login Again");
      error.statusCode = 401;
      return next(error);
    }

    const decode = await jwt.verify(token, process.env.JWT_SECRET);

    console.log(decode)
    const verifiedUser = await User.findById(decode.ID).select("-password");

    if (!verifiedUser) {
      const error = new Error("Unauthorized !! Login Again...");
      error.statusCode = 401;
      return next(error);
    }
    console.log(verifiedUser);
    
    req.user = verifiedUser;
    next();
  } catch (error) {
    next(error);
  }
};

// import jwt from "jsonwebtoken";
// import User from "../models/userModels.js";

// export const Protect = async (req, res, next) => {
//   try {
//     let token;

//     // Check if Authorization header exists and starts with 'Bearer'
//     if (
//       req.headers.authorization &&
//       req.headers.authorization.startsWith("Bearer")
//     ) {
//       token = req.headers.authorization.split(" ")[1]; // Extract token
//     }

//     if (!token) {
//       return res.status(401).json({ message: "Unauthorized. Token missing." });
//     }

//     // Verify token
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);

//     // Find the user and attach to req
//     const verifiedUser = await User.findById(decoded.id).select("-password");
//     if (!verifiedUser) {
//       return res.status(401).json({ message: "User not found. Unauthorized." });
//     }

//     req.user = verifiedUser;
//     next();
//   } catch (err) {
//     console.error("Auth error:", err.message);
//     return res.status(401).json({ message: "Invalid or expired token." });
//   }
// };
