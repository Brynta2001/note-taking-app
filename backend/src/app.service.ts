import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHealthCheck(): string {
    return 'This simple note taking API is up and running!';
  }
}
