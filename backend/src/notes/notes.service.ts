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

@Injectable()
export class NotesService {
  private readonly logger = new Logger(NotesService.name);

  constructor(
    @InjectRepository(Note)
    private readonly notesRepository: Repository<Note>,
  ) {}

  async create(createNoteDto: CreateNoteDto) {
    try {
      const note = this.notesRepository.create(createNoteDto);
      return await this.notesRepository.save(note);
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async findAll(queryParamsNoteDto: QueryParamsNoteDto) {
    const { archived } = queryParamsNoteDto;
    if (archived) {
      return this.notesRepository.find({
        where: { archived: archived },
      });
    }
    return await this.notesRepository.find();
  }

  async findOne(id: number) {
    const note = await this.notesRepository.findOneBy({ id });
    if (!note) {
      throw new NotFoundException(`Note not found`);
    }
    return note;
  }

  async update(id: number, updateNoteDto: UpdateNoteDto) {
    const note = await this.notesRepository.preload({
      id,
      ...updateNoteDto,
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
    return await this.notesRepository.remove(note);
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
