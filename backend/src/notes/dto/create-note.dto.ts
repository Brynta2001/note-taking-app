import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsInt,
  IsOptional,
  IsPositive,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateNoteDto {
  @ApiProperty({
    description: 'The title of the note',
    example: 'Buy groceries',
  })
  @IsString()
  @MinLength(1)
  title: string;

  @ApiProperty({
    description: 'The description of the note',
    example: 'Milk, eggs, bread, butter, and sugar',
  })
  @IsString()
  @MinLength(1)
  description: string;

  @ApiProperty({
    description: 'The status of the note',
    example: false,
  })
  @IsBoolean()
  @IsOptional()
  archived?: boolean;

  @ApiProperty({
    description: 'The category ID of the note',
    example: 1,
  })
  @IsInt()
  @IsOptional()
  @IsPositive()
  categoryId?: number;
}
