import { IsOptional, IsString } from 'class-validator';

export class QueryParamsNoteDto {
  @IsString()
  @IsOptional()
  archived?: boolean;

  @IsString()
  @IsOptional()
  category?: string;
}
