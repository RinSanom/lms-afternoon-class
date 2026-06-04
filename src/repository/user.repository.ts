import prisma from "../config/prisma";
import { CreateUerParam } from "./param/user-param";

export class UserRosotory {
    async creatUser(data: CreateUerParam){
        return prisma.user.create({data});
    }

    async getAllUser() {
        return prisma.user.findMany();
    }

    async getUserById(id: number){
        return prisma.user.findUnique({
            where: {
                id: Number(id)
            }
        })
    }
}