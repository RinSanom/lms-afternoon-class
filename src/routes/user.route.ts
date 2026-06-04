import { Router } from "express";
import { createUserController, getAllUserController, getUserByIdController } from "../controller/user.controller";

const route = Router();

route.post("/" , createUserController);
route.get("/" , getAllUserController);
route.get("/:id", getUserByIdController)

export default route;