
import { User } from '../../users/entities/user.entity'; 
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()   
export class Task {

    @PrimaryGeneratedColumn()
    Id: number;

    @Column()
    title: string;

    @Column()
    date: string;

    @Column()   
    status: boolean;

    @ManyToOne(() => User, (user) => user.tasks)
    user : User;

}
