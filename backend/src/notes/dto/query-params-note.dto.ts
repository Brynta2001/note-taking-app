import { IsBoolean } from 'class-validator';

export class QueryParamsNoteDto {
  @IsBoolean()
  archived?: boolean;
}
