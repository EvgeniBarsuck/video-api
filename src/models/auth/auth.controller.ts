import { Controller, Request, Post, Get, UseGuards, Body } from '@nestjs/common'
import { AuthService } from './auth.service'
import { JwtAuthGuard } from './guards/jwt-auth.guard'
import { LocalAuthGuard } from './guards/local-auth.guard'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { User } from 'src/common/entities/user.entity'
import { AuthUserDto } from 'src/common/dto/auth-user.dto'

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: 'User authorization in the system' })
  @ApiResponse({ status: 200, type: User })
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Body() authUserDto: AuthUserDto) {
    return this.authService.login(authUserDto)
  }

  @ApiOperation({ summary: 'Get user profile' })
  @ApiResponse({ status: 200, type: User })
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user
  }
}
