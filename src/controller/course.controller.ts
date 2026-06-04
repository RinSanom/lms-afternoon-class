import { CourseRepository } from "../repository/course.repository";
import { Request, Response } from "express";
import { CourseDto } from "./param/course-param";

const courseRepository = new CourseRepository();


export const getAllCourseController = async (req: Request, res: Response) =>{
    const result = await courseRepository.getAllCourse();
    if(!result){
        res.status(404).json({
            message: "Course Not Found.."
        })
    }
    res.status(200).json({
        message: "Data retrieved successfully.",
        data: result
    })
}

export const createCourseController = async (req: Request, res: Response) => {
    const data: CourseDto = req.body;
    const result = await courseRepository.createCourse(data)
    res.status(201).json({
        message: "Course Create successfully.",
        data: result
    })
}

export const getCourseByIdController = async (req: Request<{userId:string}>, res: Response) => {
    const {userId} = req.params;
    const result = await courseRepository.getCourseById(userId);
    if(!result){
        res.status(404).json({
            message: `Course with Id ${userId} Not Found..`
        })
    }
    res.status(200).json({
        message: "Data retrieved successfully",
        data: result
    })

}