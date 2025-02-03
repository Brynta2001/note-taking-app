import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { Note } from './entities/note.entity';
import { QueryParamsNoteDto } from './dto/query-params-note.dto';
import { CategoriesService } from '../categories/categories.service';
import { Category } from 'src/categories/entities/category.entity';

@Injectable()
export class NotesService {
  private readonly logger = new Logger(NotesService.name);

  constructor(
    @InjectRepository(Note)
    private readonly notesRepository: Repository<Note>,
    private readonly categoriesService: CategoriesService,
  ) {}

  async create(createNoteDto: CreateNoteDto) {
    try {
      const { categoryId, ...detailsNoteDto } = createNoteDto;
      const noteDto = { ...detailsNoteDto, category: null };

      if (categoryId) {
        const category = await this.categoriesService.findOne(categoryId);
        noteDto.category = category;
      }

      const note = this.notesRepository.create(noteDto);

      return await this.notesRepository.save(note);
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async findAll(queryParamsNoteDto: QueryParamsNoteDto) {
    const { archived = false, category } = queryParamsNoteDto;
    if (!category) {
      return this.notesRepository.find({ where: { archived } });
    }

    const queryBuilder = this.notesRepository.createQueryBuilder('note');
    const notes = await queryBuilder
      .leftJoinAndSelect('note.category', 'category')
      .where('note.archived = :archived', { archived })
      .andWhere('category.name = :name', { name: category })
      .getMany();

    return notes;
  }

  async findOne(id: number) {
    const note = await this.notesRepository.findOneBy({ id });
    if (!note) {
      throw new NotFoundException(`Note not found`);
    }
    return note;
  }

  async update(id: number, updateNoteDto: UpdateNoteDto) {
    const { categoryId, ...detailsNoteDto } = updateNoteDto;
    let category: Category;

    if (categoryId) {
      category = await this.categoriesService.findOne(categoryId);
    }

    const note = await this.notesRepository.preload({
      id,
      ...detailsNoteDto,
      category,
    });

    if (!note) {
      throw new NotFoundException(`Note not found`);
    }

    try {
      return await this.notesRepository.save(note);
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async remove(id: number) {
    const note = await this.findOne(id);
    await this.notesRepository.remove(note);
    return note;
  }

  private handleDBExceptions(error: any) {
    if (error.code === '23505') {
      throw new BadRequestException(error.detail);
    }
    this.logger.error(error);
    throw new InternalServerErrorException(
      'Unexpected error, check server logs',
    );
  }
}
