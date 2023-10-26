import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query
} from '@nestjs/common'
import { DevelopersService } from './developers.service'
import { CreateDeveloperDto } from './dto/create-developer.dto'
import { UpdateDeveloperDto } from './dto/update-developer.dto'

@Controller('developers')
export class DevelopersController {
  constructor(private readonly developersService: DevelopersService) {}

  @Post()
  create(@Body() createDeveloperDto: CreateDeveloperDto) {
    return this.developersService.create(createDeveloperDto)
  }

  @Get()
  findAll(@Query('page') page = 1, @Query('pageSize') pageSize = 5) {
    return this.developersService.findAll(page, pageSize)
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.developersService.findOne(id)
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateDeveloperDto: UpdateDeveloperDto,
  ) {
    return this.developersService.update(id, updateDeveloperDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.developersService.remove(id)
  }
}
