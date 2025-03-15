import { Injectable } from '@nestjs/common';
import { DataSource, Entity, EntityRepository, Repository } from 'typeorm';
import { User } from '../entities/user.entity';



@EntityRepository(User)
@Injectable()
export class UsersRepository extends Repository<User> {
  constructor(private dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }
}
