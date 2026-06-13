import { Role } from "../../generated/prisma/enums"
import { Request } from "express"

export interface AuthRequest extends Request {
    user?: {
        email: string,
        role?: Role
    }
}