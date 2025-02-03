import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiOperation({ summary: 'Health check' })
  @ApiResponse({ status: 200, description: 'API is up and running' })
  @Get('health-check')
  getHealthCheck(): string {
    return this.appService.getHealthCheck();
  }
}
