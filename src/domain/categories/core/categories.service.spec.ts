import { Test, TestingModule } from '@nestjs/testing';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from '../dtos/create-category.dto';
import { ICategoryRepository } from '../repositories/category.repository.interface';
import { CategoryEntity } from '../entities/category.entity';

describe('CategoriesService', () => {
  let service: CategoriesService;

  beforeEach(async () => {
    const mockCategoryRepository = {
      // mock methods as needed
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CategoriesService,
        {
          provide: ICategoryRepository,
          useValue: mockCategoryRepository,
        },
      ],
    }).compile();

    service = module.get<CategoriesService>(CategoriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
describe('CategoriesService', () => {
  let service: CategoriesService;

  beforeEach(async () => {
    const mockCategoryRepository: ICategoryRepository = {
      createCategory: function (
        category: CategoryEntity,
      ): Promise<CategoryEntity> {
        throw new Error('Function not implemented.');
      },
      findAllCategories: function (): Promise<CategoryEntity[]> {
        throw new Error('Function not implemented.');
      },
      findCategoryById: function (name: string): Promise<CategoryEntity> {
        throw new Error('Function not implemented.');
      },
      findCategoryBySlug: function (name: string): Promise<CategoryEntity> {
        throw new Error('Function not implemented.');
      },
      updateCategory: function (
        id: string,
        category: CategoryEntity,
      ): Promise<CategoryEntity> {
        throw new Error('Function not implemented.');
      },
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CategoriesService,
        {
          provide: ICategoryRepository,
          useValue: mockCategoryRepository,
        },
      ],
    }).compile();

    service = module.get<CategoriesService>(CategoriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
describe('createCategory', () => {
  it('should create a new category', async () => {
    let service: CategoriesService;

    const category = new CreateCategoryDto();
    category.name = 'Foord';
    category.description = 'Food description';
    category.slug = 'food';

    const createdCategory = await service.create(category);

    expect(createdCategory).toEqual(category);
  });
});
