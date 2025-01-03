import {
  IsBoolean,
  IsInt,
  IsOptional,
  IsPositive,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateNoteDto {
  @IsString()
  @MinLength(1)
  title: string;

  @IsString()
  @MinLength(1)
  description: string;

  @IsBoolean()
  @IsOptional()
  archived?: boolean;

  @IsInt()
  @IsOptional()
  @IsPositive()
  categoryId?: number;
}
