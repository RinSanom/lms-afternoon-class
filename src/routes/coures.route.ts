import { Router } from "express";
import { createCourseController, getAllCourseController, getCourseByIdController } from "../controller/course.controller";

const router = Router();

router.get("/", getAllCourseController);
router.post("/", createCourseController)
router.get("/:id" , getCourseByIdController)

export default router;