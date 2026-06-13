import { NextFunction, Response } from "express";
import { Role } from "../generated/prisma/enums";
import { AuthRequest } from "../auth/request/auth-request";

export const authorization = (role: Role[]) => {
    return (req: AuthRequest, res: Response, next: NextFunction): void => {
        if(!req.user){
            res.status(401).json({
                message: "Unauthorisez"
            })
        }

        if( !req.user?.role ||  !role.includes(req.user?.role)){
            res.status(403).json({
                messgae: "Forbidden"
            })
        }

        next();
    }
}