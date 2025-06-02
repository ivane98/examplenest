import { Injectable } from '@nestjs/common';
import { Prisma, Role } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class EmployeesService {
  constructor(private readonly databaseService: DatabaseService) { }

  async create(createEmployeeDto: Prisma.PostCreateInput) {
    return this.databaseService.post.create({
      data: createEmployeeDto
    })
  }

  async findAll(role?: Role) {
    if (role) return this.databaseService.post.findMany({
      where: {
        role,
      }
    })
    return this.databaseService.post.findMany()
  }

  async findOne(id: number) {
    return this.databaseService.post.findUnique({
      where: {
        id,
      }
    })
  }

  async update(id: number, updateEmployeeDto: Prisma.PostCreateInput) {
    return this.databaseService.post.update({
      where: {
        id,
      },
      data: updateEmployeeDto,
    })
  }

  async remove(id: number) {
    return this.databaseService.post.delete({
      where: {
        id,
      }
    })
  }
}