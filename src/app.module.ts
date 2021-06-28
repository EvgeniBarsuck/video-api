import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './models/database/database.module';
import { AuthModule } from './models/auth/auth.module';
import { UserModule } from './models/user/user.module';

@Module({
  imports: [ConfigModule.forRoot(), DatabaseModule, AuthModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
