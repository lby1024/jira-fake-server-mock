import { HttpException, Injectable } from '@nestjs/common';
import db from 'src/db';

@Injectable()
export class ProjectService {

	getAll(personId: number, name: string) {
		let res = db.projects
		if (personId) {
			res = res.filter(item => item.personId === Number(personId))
		}
		if (name) {
			res = res.filter(item => {
				const res = item.name.includes(name)
				console.log(res, item.name, name, 88888)
				return res
			})
		}

		return res
	}

	getOne(id: number) {
		const target = db.projects.find((item) => item.id === id)
		if (target) {
			return target
		}
		throw new HttpException('project undefined', 404)
	}
	
	ceateProjects(data: any) {
		const project ={
			created: new Date().getTime(),
			id: new Date().getTime(),
			name: undefined,
			organization: undefined,
			personId: undefined,
			...data
		}
		db.projects.push(project)
		return db.projects
	}
	
	deleteProject(id: number) {
	 	db.projects = db.projects.filter(item => item.id !== id)
		return '删除成功'
	}
	
	updataProject(id: number, data: any) {
		db.projects = db.projects.map(item => {
			if(item.id === id) return {...item, ...data}
			return item
		})
		return db.projects.find(item => item.id === id)
	}
}
