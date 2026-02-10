import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { env } from "../config/env";

declare global {
  namespace Express {
    interface Request {
      user?: any;
    }
  }
}

export const verifyJwt = (req: Request, res: Response, next: NextFunction) => {
  const header = req.headers.authorization;
  if (!header) return res.status(401).send("No token");

  const token = header.split(" ")[1];

  try {
    req.user = jwt.verify(token, env.jwtSecret);
    next();
  } catch {
    res.status(403).send("Invalid token");
  }
};
