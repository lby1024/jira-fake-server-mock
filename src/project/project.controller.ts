import { Body, Controller, Delete, Get, HttpException, Param, Patch, Post, Query } from '@nestjs/common';
import { ProjectService } from './project.service';

@Controller('api/project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}
  
  
  @Get('')
  getAll(
  	@Query('name') name: string, 
  	@Query('personId') personId: string
  ) {
  	  return this.projectService.getAll(Number(personId), name)
  }
  
  @Post('')
  ceateProject(
	@Body() data: any
  ) {
	  // throw new HttpException('未知错误', 500)
	  return this.projectService.ceateProjects(data)
  }
  
  @Delete(':id')
  deleteProject(@Param('id') id: string) {
	  // throw new HttpException('未知错误', 500)
	  this.projectService.deleteProject(Number(id))
  }
  
  @Patch(':id')
  updateProject(
	@Param('id') id: string,
  	@Body() data: any
  ) {
	  throw new HttpException('收藏失败', 500)
  	  // return this.projectService.updataProject(Number(id), data)
  }
  
  @Get(':id')
  getProject(@Param('id') id: number) {
	return this.projectService.getOne(Number(id))
  }
  
}
