import prisma from "../config/prisma";
import { CourseParam } from "./param/course-param";

export class CourseRepository {
  async getAllCourse() {
    return prisma.course.findMany();
  }

  async createCourse(data: CourseParam){
      return prisma.course.create({data})
  }

  async getCourseById(userId: string){
    return prisma.course.findUnique({
      where : {
        id: userId
      }
    })
  }
}
