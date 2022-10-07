import {
  Body,
  Controller,
  Delete,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { Get } from '@nestjs/common/decorators';
import { ApiTags } from '@nestjs/swagger/dist';
import { createEmployeeDto, updateEmployeeDto } from 'src/dto/employee.dto';
import { EmployeeService } from './employee.service';

@ApiTags('employees')
@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeService: EmployeeService) {}

  @Get()
  findEmployee() {
    return this.employeService.findEmployee();
  }

  @Get(':id')
  findEmployeeByid(@Param('id', ParseIntPipe) id: number) {
    return this.employeService.findEmployeeByid(id);
  }

  @Post()
  createEmployee(@Body() createEmployee: createEmployeeDto) {
    return this.employeService.createEmployee(createEmployee);
  }

  @Put(':id')
  updateEmployee(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateEmployee: updateEmployeeDto,
  ) {
    return this.employeService.updateEmployee(id, updateEmployee);
  }

  @Delete(':id')
  deleteEmployee(@Param('id', ParseIntPipe) id: number) {
    return this.employeService.deleteEmployee(id);
  }
}
