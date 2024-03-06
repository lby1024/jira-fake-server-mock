import { Controller, Get, Post, Body, Patch, Param, Delete, Headers } from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('api/user')
export class UserController {
	constructor(private readonly userService: UserService) { }

	@Post('regist')
	regist(
		@Body('nickName') nickName: string,
		@Body('password') password: string
	) {
		return this.userService.regist({ nickName, password })
	}

	@Post('login')
	login(
		@Body('nickName') nickName: string,
		@Body('password') password: string
	) {
		return this.userService.login({ nickName, password })
	}

	@Get('list')
	findAll() {
		return this.userService.findAll();
	}

	@Get('me')
	getUserInfo(@Headers('Authorization') token: string) {
		return this.userService.getUserInfo(token)
		// return this.userService.getUserInfoFail(token)
	}
	/**
	 * * * * * * * * * * * v
	 * * * * * * * * * * * v
	 * * * * * * * * * * * v
	 */
	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.userService.findOne(+id);
	}

	@Patch(':id')
	update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
		return this.userService.update(+id, updateUserDto);
	}

	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.userService.remove(+id);
	}
}
