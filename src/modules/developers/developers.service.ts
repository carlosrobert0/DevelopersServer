import { Injectable } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { PrismaService } from './../../prisma/prisma.service'
import { CreateDeveloperDto } from './dto/create-developer.dto'
import { UpdateDeveloperDto } from './dto/update-developer.dto'

@Injectable()
export class DevelopersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createDeveloperDto: CreateDeveloperDto) {
    const data: Prisma.DeveloperCreateInput = createDeveloperDto

    const developer = await this.prisma.developer.create({ data })

    return developer
  }

  async findAll() {
    const developers = await this.prisma.developer.findMany({
      include: {
        level: true,
      },
    })

    return developers
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
