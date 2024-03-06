import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import {mock} from 'mockjs'

@Injectable()
export class StudentService {

  findAll(pageNumber: number, limit: number) {
    return mock({
        next: pageNumber >= 5 ? null : pageNumber + 1,
        prev: pageNumber <= 1 ? null : pageNumber - 1,
		total: 90,
        [`list|${limit}`]: [
          {
            "id|5": "",
            name: "@cname",
			"age|12-18": 18,
			"created|1709538447231-1809538447231": 1809538447231
          }
        ]
      });
  }
}
