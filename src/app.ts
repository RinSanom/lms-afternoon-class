import express from "express" 
import type { Application, Request , Response } from "express";

const app: Application = express();

app.get("/" , (req: Request, res: Response)=> {
    res.send("Application is running!")
})

export default app;