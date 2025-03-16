import { Controller, Get, Post, Body, Param, Delete, Patch, ValidationPipe, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';
import { UpdateTaskDto } from './dto/update-task.dto';


@ApiTags('Tasks')
@Controller('tasks')
@ApiSecurity('JWT-auth')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post(':userId')
  create(@Body(ValidationPipe) createTaskDto: CreateTaskDto, @Param('userId') userId : number) {
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

  @Patch('Check/:userId')
  update(@Param('userId') userId: string) {
    return this.tasksService.update(Number(userId));
  }

   @Put('/edit/:taskId')
  editTask(@Param('taskId') taskId: number, @Body(ValidationPipe) updateTaskDto: UpdateTaskDto) {
    return this.tasksService.editTask(Number(taskId), updateTaskDto);
  }

  @Delete(':userId')
  remove(@Param('userId') userId: string) {
    return this.tasksService.remove(Number(userId));
  }
}
