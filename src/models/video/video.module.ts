import { Module } from '@nestjs/common'
import { APP_GUARD } from '@nestjs/core'
import { RolesGuard } from 'src/guards/roles.guards'
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard'
import { JwtStrategy } from '../auth/stragies/jwt.strategy'
import { DatabaseModule } from '../database/database.module'
import { videoProviders } from './video,providers'
import { VideoController } from './video.controller'
import { VideoService } from './video.service'

@Module({
  imports: [DatabaseModule],
  controllers: [VideoController],
  providers: [
    ...videoProviders,
    JwtStrategy,
    VideoService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class VideoModule {}
