import { Injectable, HttpException } from '@nestjs/common';
import db from 'src/db';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {

	findAll() {
		return db.users
	}
	
	regist({ nickName, password }) {
		if(nickName === 'jack') {
		  		  throw new HttpException('账号已存在', 400)
		}
		return {
		  		id: new Date().getTime(),
		  		nickName,
		  		token: `token-${password}`
		}
	}

	login({ nickName, password }) {
		if (nickName === 'jack' && password === '111111') {
			return {
				id: new Date().getTime(),
				token: `token-${password}`,
				nickName,
			}
		} else {
			throw new HttpException('账号密码不正确', 400)
		}
	}

	getUserInfo(token: string) {
		if (token) {
			return {
				id: 'uid-123',
				nickName: 'jack',
			}
		}
		throw new HttpException('未登录', 401)
	}

	getUserInfoFail(token: string) {
		throw new HttpException('未登录', 401)
	}
	
	create(createUserDto: CreateUserDto) {
		return 'This action adds a new user';
	}
	
	findOne(id: number) {
		return `This action returns a #${id} user`;
	}

	update(id: number, updateUserDto: UpdateUserDto) {
		return `This action updates a #${id} user`;
	}

	remove(id: number) {
		return `This action removes a #${id} user`;
	}
}
