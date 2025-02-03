import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { NotesService } from './notes.service';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { QueryParamsNoteDto } from './dto/query-params-note.dto';
import { ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';

@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @ApiOperation({ summary: 'Create a new note' })
  @ApiResponse({
    status: 201,
    description: 'The note has been successfully created.',
  })
  @Post()
  create(@Body() createNoteDto: CreateNoteDto) {
    return this.notesService.create(createNoteDto);
  }

  @ApiOperation({ summary: 'Get all notes' })
  @ApiResponse({
    status: 200,
    description: 'All notes have been successfully retrieved.',
  })
  @ApiParam({
    name: 'category',
    required: false,
    description: 'Filter notes by category.',
  })
  @ApiParam({
    name: 'archived',
    required: false,
    description: 'Filter notes by archived status.',
  })
  @Get()
  findAll(@Query() queryParamsNoteDto: QueryParamsNoteDto) {
    return this.notesService.findAll(queryParamsNoteDto);
  }

  @ApiOperation({ summary: 'Get a note by ID' })
  @ApiResponse({
    status: 200,
    description: 'The note has been successfully retrieved.',
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.notesService.findOne(+id);
  }

  @ApiOperation({ summary: 'Update a note by ID' })
  @ApiResponse({
    status: 200,
    description: 'The note has been successfully updated.',
  })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNoteDto: UpdateNoteDto) {
    return this.notesService.update(+id, updateNoteDto);
  }

  @ApiOperation({ summary: 'Delete a note by ID' })
  @ApiResponse({
    status: 200,
    description: 'The note has been successfully deleted.',
  })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.notesService.remove(+id);
  }
}
