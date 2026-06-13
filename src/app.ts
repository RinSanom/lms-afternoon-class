import express from "express" 
import type { Application, Request , Response } from "express";
import userRoute from "./routes/user.route"
import courseRouter from "./routes/coures.route"
import authRoute from "./routes/auth/auth.route"
import morgan from "morgan";
const app: Application = express();

app.use(express.json());
app.use(morgan("dev"))

app.use("/course", courseRouter)
app.use("/user",userRoute)
app.use('/auth', authRoute)


app.get("/" , (req: Request, res: Response)=> {
    res.send("Application is running!")
})


export default app;
