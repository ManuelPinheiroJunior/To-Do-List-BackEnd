import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';


@ApiTags('Tasks')
@Controller('tasks')
@ApiSecurity('JWT-auth')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post(':userId')
  create(@Body() createTaskDto: CreateTaskDto, @Param('userId') userId : number) {
    return this.tasksService.create(createTaskDto, userId);
  }


  @Get('/completed/:userId')
  findAllTaskByUserCompleted(@Param('userId') userId : number) {
    return this.tasksService.findAllTaskByUserCompleted(Number(userId));
  }

  @Get('/not-completed/:userId')
  findAllTaskByUserNotCompleted(@Param('userId') userId : number) {
    return this.tasksService.findAllTaskByUserNotCompleted(userId);
  }

  @Patch(':userId')
  update(@Param('userId') userId: string) {
    return this.tasksService.update(Number(userId));
  }

  @Delete(':userId')
  remove(@Param('userId') userId: string) {
    return this.tasksService.remove(Number(userId));
  }
}
