import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { DevelopersModule } from './modules/developers/developers.module'
import { LevelsModule } from './modules/levels/levels.module'

@Module({
  imports: [DevelopersModule, LevelsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
