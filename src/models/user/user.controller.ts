import { Controller, Get } from '@nestjs/common'
import { UserService } from './user.service'

@Controller('user')
export class UserController {
  constructor(private readonly service: UserService) {}

  @Get('/')
  async findAll() {
      return this.service.findAll();
  }
}