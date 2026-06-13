import  jwt  from "jsonwebtoken";
import prisma from "../config/prisma";
import { CreateUerParam } from "../repository/param/user-param";
import bcrypt from "bcrypt";
import "dotenv"

const JWT_SECRET = process.env.JWT_SECRET || "123456789"

export class AuthServer {

    async register(data: CreateUerParam){
        const passWordHash = await bcrypt.hash(data.password, 10);
        return  prisma.user.create({
            data: {
                ...data,
                password: passWordHash
            }
        })
    }
    
    async login(email: string, password: string) {

        const user = await prisma.user.findFirst({
            where : {email} 
        })

        if(!user) {
            throw new Error("Invalide email or password")
        }

        const isMatchPassword = await bcrypt.compare(
            password,
            user.password
        );

        if(!isMatchPassword){
            throw new Error("Invalide email or password")
        }

        const token = jwt.sign(
            {
                email: user.email,
                role: user.role,
                fistName: user.fistName,
                lastName: user.lastName
            },
            JWT_SECRET,
            {
                expiresIn: "1d"
            }
        )
        return token;
    }

}