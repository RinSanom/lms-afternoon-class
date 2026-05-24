import { PrismaClient } from "../generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });

const prisma = new PrismaClient({ adapter });  

prisma.$connect()
    .then(()=> {
        console.log("Database Connected..!")
    })
    .catch((error) => {
        console.log("Database Connection Error: " , error)
    })

export default prisma;