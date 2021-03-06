import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AuthModule } from './models/auth/auth.module'
import { UserModule } from './models/user/user.module'
import { VideoModule } from './models/video/video.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    AuthModule,
    UserModule,
    VideoModule,
  ],
})
export class AppModule {}
