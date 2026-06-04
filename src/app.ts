import express from "express" 
import type { Application, Request , Response } from "express";
import userRoute from "./routes/user.route"
import courseRouter from "./routes/coures.route"

const app: Application = express();

app.use(express.json());

app.use("/course", courseRouter)
app.use("/user",userRoute)


app.get("/" , (req: Request, res: Response)=> {
    res.send("Application is running!")
})


export default app;
