import { AuthServer } from "../../auth/auth";
import { Request, Response } from "express";
import { CreateUerParam } from "../../repository/param/user-param";

const authServer = new AuthServer();

export const registerController  = async (req: Request, res: Response):Promise<void> => {
    const userData: CreateUerParam = req.body;
    try {
        const newUser = await authServer.register(userData)
        res.status(201).json(newUser)
    } catch (error: any) {
        res.status(500).json({
            message: error.message || ""
        })
    }
}

export const loginCotroller = async (req: Request, res: Response):Promise<void> => {
    const { email , password } = req.body;

    try {
        const logined = await authServer.login(email, password);
        res.status(200).json({
            message: "Login Successfully!",
            date: logined
        })
    } catch (error: any) {
         res.status(500).json({
            message: error.message || ""
        })
    }
}
