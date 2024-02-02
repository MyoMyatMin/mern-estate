import { errorHandler } from "./error.js";
import jwt from "jsonwebtoken";
export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return next(errorHandler(401, "Unauthorized"));
  }

  jwt.verify(
    token,
    process.env.JWT_SECRET,
    { ignoreExpiration: false },
    (err, user) => {
      if (err) {
        if (err.name === "TokenExpiredError") {
          return next(errorHandler(401, "Token expired"));
        }
        return next(errorHandler(403, "Forbidden"));
      }

      req.user = user;
      next();
    }
  );
};
