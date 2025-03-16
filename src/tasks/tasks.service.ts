import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { TasksRepository } from './repo/tasks.repository';
import { Task } from './entities/task.entity';
import { UsersService } from '../users/users.service';

  // add Task based on userId
  // get all tasks based on userId (task complete)
  // get all tasks based on userId (task not complete)
  // mark task as complete with base on userId
  // delete task based on userId

@Injectable()
export class TasksService {

  constructor(private tasksRepository: TasksRepository, private userService : UsersService) {}


  async create(createTaskDto: CreateTaskDto, userId : number) {
    let task : Task = new Task();
    task.title = createTaskDto.title;
    task.date = new Date().toLocaleString();
    task.status = false;
    task.user = await this.userService.findUserById(userId);

    return this.tasksRepository.save(task);
  }

  findAllTaskByUserCompleted(userId : number) {
    try
    {
      return this.tasksRepository.find({
        relations : ['user'], 
        where : { user : { id: userId }, status : true},});
    } catch (error) {
      throw error;
    }
  }

  findAllTaskByUserNotCompleted(userId : number) {
    try
    {
      return this.tasksRepository.find({
        relations : ['user'], 
        where : { user : { id: userId }, status : false},});
    } catch (error) {
      throw error;
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} task`;
  }

  update(taskId: number) {
    return this.tasksRepository.update(taskId , {status : true});
  }
  
  remove(taskId: number) {
    try {
      return this.tasksRepository.delete(taskId);
    } catch (error) {
      throw error;
    }
  }
}
