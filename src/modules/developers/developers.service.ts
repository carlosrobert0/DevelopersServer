import { Injectable } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { PrismaService } from './../../prisma/prisma.service'
import { CreateDeveloperDto } from './dto/create-developer.dto'
import { UpdateDeveloperDto } from './dto/update-developer.dto'

@Injectable()
export class DevelopersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createDeveloperDto: CreateDeveloperDto) {
    const data: CreateDeveloperDto = createDeveloperDto

    const developer = await this.prisma.developer.create({ data })

    return developer
  }

  async findAll(page: number, pageSize: number) {
    const skip = (page - 1) * pageSize
    const take = Number(pageSize)

    const totalDevelopers = await this.prisma.developer.count()

    const developers = await this.prisma.developer.findMany({
      skip,
      take,
      include: {
        level: true,
      },
    })

    return {
      totalDevelopers,
      page,
      pageSize,
      data: developers,
    }
  }

  async findOne(id: string) {
    const developer = await this.prisma.developer.findUnique({
      where: {
        id,
      },
    })

    return developer
  }

  async update(id: string, updateDeveloperDto: UpdateDeveloperDto) {
    const data: Prisma.DeveloperUpdateInput = updateDeveloperDto

    const developer = await this.prisma.developer.update({
      where: {
        id,
      },
      data,
    })

    return developer
  }

  async remove(id: string) {
    await this.prisma.developer.delete({
      where: {
        id,
      },
    })
  }
}
