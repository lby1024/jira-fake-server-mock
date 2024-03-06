import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('api/student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}


  @Get()
  findAll(
	@Query('pageNumber') pageNumber: string,
	@Query('limit') limit: string,
  ) {
    return this.studentService.findAll(Number(pageNumber), Number(limit));
  }
}
