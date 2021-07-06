import { Controller, Get, UseGuards } from '@nestjs/common';
import { Roles } from 'src/common/decorators/roles.decorator';
import { Role } from 'src/common/types/auth.types';
import { RolesGuard } from 'src/guards/roles.guards';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { VideoService } from './video.service';

@Controller('video')
export class VideoController {
    constructor(private readonly service: VideoService) {}

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Get('/')
    @Roles(Role.User)
    async findAll() {
      return this.service.findAll()
    }
}
