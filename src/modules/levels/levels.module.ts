import { Module } from '@nestjs/common'
import { PrismaService } from './../../prisma/prisma.service'
import { LevelsController } from './levels.controller'
import { LevelsService } from './levels.service'

@Module({
  controllers: [LevelsController],
  providers: [LevelsService, PrismaService],
})
export class LevelsModule {}
