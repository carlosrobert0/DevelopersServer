import { Module } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { DevelopersController } from './developers.controller'
import { DevelopersService } from './developers.service'

@Module({
  controllers: [DevelopersController],
  providers: [DevelopersService, PrismaService],
})
export class DevelopersModule {}
