import { Router } from "express";
import { createCourseController, getAllCourseController, getCourseByIdController } from "../controller/course.controller";
import { authenticat } from "../middleware/auth.middleware";
import { authorization } from "../middleware/role.middelware";
import { Role } from "../generated/prisma/enums";

const router = Router();

router.get("/", authenticat as any, authorization([Role.INSTRUTOR]) , getAllCourseController);
router.post("/", createCourseController)
router.get("/:id" , getCourseByIdController)

export default router;