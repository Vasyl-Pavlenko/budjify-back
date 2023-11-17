import { Exclude, Expose } from 'class-transformer'

@Exclude()
export class UserResponseDto {
	@Expose()
	readonly id: number

	@Expose()
	readonly username: string

	constructor(id: number, username: string) {
		this.id = id
		this.username = username
	}
}
