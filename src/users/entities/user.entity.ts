
import { Task } from '../../tasks/entities/task.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    email: string;

    @Column()
    password?: string;

    @Column({ nullable: true })
    dateOfBirth: string;

    @Column()
    role: string;


    @OneToMany(() => Task, task => task.user)
    tasks?: Task[];
}
