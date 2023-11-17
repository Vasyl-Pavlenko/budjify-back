import {
	Injectable,
	BadRequestException,
	NotFoundException,
} from '@nestjs/common'
import { CreateCategoryDto } from './dto/create-category.dto'
import { UpdateCategoryDto } from './dto/update-category.dto'
import { Repository } from 'typeorm'
import { Category } from './entities/category.entity'
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class CategoryService {
	constructor(
		@InjectRepository(Category)
		private readonly categoryRepository: Repository<Category>,
	) {}

	async create(createCategoryDto: CreateCategoryDto, id: number) {
		const isExist = await this.categoryRepository.findBy({
			user: { id },
			title: createCategoryDto.title,
		})

		if (isExist.length) {
			throw new BadRequestException(
				'Oops! This category already exists. Please choose a different name.',
			)
		}

		const newCategory = {
			title: createCategoryDto.title,
			user: { id },
		}

		return await this.categoryRepository.save(newCategory)
	}

	async findAll(id: number) {
		return await this.categoryRepository.find({
			where: {
				user: { id },
			},
			relations: {
				transactions: true,
			},
		})
	}

	async findOne(id: number) {
		const category = await this.categoryRepository.findOne({
			where: { id },
			relations: {
				user: true,
				transactions: true,
			},
		})

		if (!category) {
			throw new NotFoundException(
				"Oops! We couldn't find the requested category.It may have been deleted or never existed.Please check the category and try again.",
			)
		}

		return category
	}

	async update(id: number, updateCategoryDto: UpdateCategoryDto) {
		const category = await this.categoryRepository.findOne({
			where: { id },
		})

		if (!category) {
			throw new NotFoundException(
				"Oops! We couldn't find the requested category.It may have been deleted or never existed.Please check the category and try again.",
			)
		}

		return await this.categoryRepository.update(id, updateCategoryDto)
	}

	async remove(id: number) {
		const category = await this.categoryRepository.findOne({
			where: { id },
		})

		if (!category) {
			throw new NotFoundException(
				"Oops! We couldn't find the requested category.It may have been deleted or never existed.Please check the category and try again.",
			)
		}

		return await this.categoryRepository.delete(id)
	}
}
