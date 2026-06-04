import { CreateUerParam } from "../repository/param/user-param";
import { UserRosotory } from "../repository/user.repository";
import { Request , Response } from "express";

const userRepository = new UserRosotory;

export const createUserController = async(req: Request, res: Response): Promise<void> => {
    const userData: CreateUerParam = req.body;
    console.log("Data in controller " , userData)
    try {
         const newUser = await userRepository.creatUser(userData); 
         res.status(201).json(newUser);
    } catch (error: any) {
        res.status(500).json({
            message: error.message || "Failed to create teacher" 
        }     
        )
    }
}

export const getAllUserController = async(req: Request, res: Response) => {
    try {
        const allUSer = await userRepository.getAllUser();
        res.status(200).json(allUSer)
    } catch (error: any) {
        res.status(500).json({
            message: error.message || "Failed to create teacher" 
        }     
        )
    }
}

export const getUserByIdController = async(req: Request<{id: number}>, res: Response) => {
    const { id } = req.params;
    const result = await userRepository.getUserById(id);
    if(!result) {
       res.status(404).json({
        message : `User with id ${id} Not found!`
       }) 
    }
    res.status(200).json({
        message: "Success",
        data: result
    })
}

