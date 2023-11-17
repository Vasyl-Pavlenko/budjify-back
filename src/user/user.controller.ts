import {
	Controller,
	Post,
	Body,
	UsePipes,
	ValidationPipe,
} from '@nestjs/common'
import { UserService } from './user.service'
import { CreateUserDto } from './dto/create-user.dto'
import { UserResponseDto } from './dto/user-response.dto'
import { plainToClass } from 'class-transformer'

@Controller('user')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Post()
	@UsePipes(new ValidationPipe())
	async create(@Body() createUserDto: CreateUserDto) {
		const { user, token } = await this.userService.create(createUserDto)
		const userResponse = plainToClass(UserResponseDto, user, {
			excludeExtraneousValues: true,
		})
		return { user: userResponse, token }
	}
}
