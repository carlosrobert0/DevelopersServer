import { Injectable } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { PrismaService } from 'src/prisma/prisma.service'
import { CreateLevelDto } from './dto/create-level.dto'
import { UpdateLevelDto } from './dto/update-level.dto'

@Injectable()
export class LevelsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createLevelDto: CreateLevelDto) {
    const data: Prisma.LevelCreateInput = createLevelDto

    const level = await this.prisma.level.create({ data })

    return level
  }

  async findAll() {
    const levels = await this.prisma.level.findMany({
      include: {
        developers: true,
      },
    })

    return levels
  }

  async findOne(id: string) {
    const level = await this.prisma.level.findUnique({
      where: {
        id,
      },
    })

    return level
  }

  async update(id: string, updateLevelDto: UpdateLevelDto) {
    const data: Prisma.LevelUpdateInput = updateLevelDto

    const level = await this.prisma.level.update({
      where: {
        id,
      },
      data,
    })

    return level
  }

  async remove(id: string) {
    await this.prisma.level.delete({
      where: {
        id,
      },
    })
  }
}
