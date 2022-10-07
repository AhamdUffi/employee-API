import { Injectable } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common/enums';
import { HttpException } from '@nestjs/common/exceptions';
import { InjectRepository } from '@nestjs/typeorm';
import { createEmployeeDto, updateEmployeeDto } from 'src/dto/employee.dto';
import { Employee } from 'src/entity/employee.entity';
import { createEmployeeParms } from 'src/utility/utility';
import { Repository } from 'typeorm';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee) private repositoryService: Repository<Employee>,
  ) {}

  findEmployee() {
    return this.repositoryService.find();
  }

  findEmployeeByid(id: number) {
    const userId = this.repositoryService.findOne({ where: { id } });
    return userId;
  }

  createEmployee(createEmployee: createEmployeeDto) {
    const newEmployee = this.repositoryService.create({ ...createEmployee });
    return this.repositoryService.save(newEmployee);
  }

  updateEmployee(id: number, createDetails: updateEmployeeDto) {
    this.repositoryService.update({ id }, { ...createDetails });
    return `your data has been updated`;
  }

  deleteEmployee(id: number) {
    this.repositoryService.delete({ id });
  }
}
