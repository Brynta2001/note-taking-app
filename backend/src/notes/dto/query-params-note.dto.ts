import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class QueryParamsNoteDto {
  @IsBoolean()
  @IsOptional()
  archived?: boolean;

  @IsString()
  @IsOptional()
  category?: string;
}
