import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoriesRepository: Repository<Category>,
  ) {}

  create(createCategoryDto) {
    const category = new Category();
    category.name = createCategoryDto.name;
    return this.categoriesRepository.save(category);
  }

  findAll() {
    return this.categoriesRepository.find();
  }

  findOne(id: number) {
    return this.categoriesRepository.findOne(id);
  }

  update(id: number, updateCategoryDto) {
    const category = new Category();
    category.id = id;
    category.name = updateCategoryDto.name;
    return this.categoriesRepository.save(category);
  }

  remove(id: number) {
    return this.categoriesRepository.delete(id);
  }
}
