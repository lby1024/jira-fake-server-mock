import { Injectable } from '@nestjs/common';
import { mock } from 'mockjs'
import { CreateEpicDto } from './dto/create-epic.dto';
import { UpdateEpicDto } from './dto/update-epic.dto';

@Injectable()
export class EpicService {
	create(createEpicDto: CreateEpicDto) {
		return 'This action adds a new epic';
	}

	findAll(pageNumber: number, limit: number) {
		if (pageNumber >= 9) return {
			next: null,
			prev: pageNumber-1,
			list: []
		}
		return mock({
			next: pageNumber >= 9 ? null : pageNumber + 1,
			prev: pageNumber <= 1 ? null : pageNumber - 1,
			[`list|${limit}`]: [
				{
					"id|5": "",
					name: "@cname"
				}
			]
		});
	}

	findOne(id: number) {
		return `This action returns a #${id} epic`;
	}

	update(id: number, updateEpicDto: UpdateEpicDto) {
		return `This action updates a #${id} epic`;
	}

	remove(id: number) {
		return `This action removes a #${id} epic`;
	}

}
