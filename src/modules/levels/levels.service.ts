import { Injectable, NotImplementedException } from '@nestjs/common'
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

  async findAll(page: number, pageSize: number) {
    const skip = (page - 1) * pageSize
    const take = Number(pageSize)

    const totalLevels = await this.prisma.level.count()

    const levels = await this.prisma.level.findMany({
      skip,
      take,
      include: {
        developers: true,
      },
    })

    return {
      totalLevels,
      page,
      pageSize,
      data: levels,
    }
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
    try {
      await this.prisma.level.delete({
        where: {
          id,
        },
      })
    } catch (error) {
      console.log('error', error)
      throw new NotImplementedException(
        'Existem um ou mais desenvolvedores vinculados a este nível',
      )
    }
  }
}
