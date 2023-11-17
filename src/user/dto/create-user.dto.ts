import { IsEmail, MinLength } from 'class-validator'

export class CreateUserDto {
	@IsEmail({}, { message: 'Please provide a valid email address.' })
	email: string

	@MinLength(6, { message: ' Password must be longer then 6 characters' })
	password: string
}
