import { Router } from "express";
import { loginCotroller, registerController } from "../../controller/auth/auth.controller";

const route = Router();

route.post("/resgister" , registerController);
route.post("/login" , loginCotroller);

export default route;