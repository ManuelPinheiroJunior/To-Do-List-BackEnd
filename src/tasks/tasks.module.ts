import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { Task } from './entities/task.entity';
import { TasksRepository } from './repo/tasks.repository';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([Task]),
 UsersModule],  
  providers: [TasksService, TasksRepository],  
  controllers: [TasksController],
  exports: [TasksService, TasksRepository],  
})
export class TasksModule {}
