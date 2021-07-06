import { Controller, Get } from '@nestjs/common'
import { UserService } from './user.service'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'

@Controller('user')
@ApiTags('user')
export class UserController {
  constructor(private readonly service: UserService) {}

  @Get('/')
  async findAll() {
    return true
  }
}
