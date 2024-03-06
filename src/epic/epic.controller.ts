import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { EpicService } from './epic.service';
import { CreateEpicDto } from './dto/create-epic.dto';
import { UpdateEpicDto } from './dto/update-epic.dto';

@Controller('api/epic')
export class EpicController {
  constructor(private readonly epicService: EpicService) {}
  
  @Get()
  findAll(
	@Query('pageNumber') pageNumber: string,
	@Query('limit') limit: string
  ) {
    return this.epicService.findAll(Number(pageNumber), Number(limit));
  }
  
  @Post()
  create(@Body() createEpicDto: CreateEpicDto) {
    return this.epicService.create(createEpicDto);
  }


  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.epicService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEpicDto: UpdateEpicDto) {
    return this.epicService.update(+id, updateEpicDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.epicService.remove(+id);
  }
}
