import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import "dotenv";
import { AuthRequest } from "../auth/request/auth-request";
import { Role } from "../generated/prisma/enums";

interface TokenPayload {
  email: string;
  role: Role;
}

const JWT_SECRET = process.env.JWT_SECRET || "123456789";

export const authenticat = (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
): void => {
  const header = req.headers.authorization || "";

  if (!header || !header.startsWith("Bearer ")) {
    res.status(401).json({
      message: "Authentication Token is missing or invalide",
    });
  }
  try {
    const token = header?.split(" ")[1];

    const decodeToken = jwt.verify(token, JWT_SECRET) as TokenPayload;

    req.user = {
      email: decodeToken.email,
      role: decodeToken.role,
    };

    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid or expired token." });
    return;
  }
};


