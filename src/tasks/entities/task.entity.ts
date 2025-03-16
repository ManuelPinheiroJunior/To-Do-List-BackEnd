
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from 'users/entities/user.entity';

@Entity()   
export class Task {

    @PrimaryGeneratedColumn()
    userId: number;

    @Column()
    title: string;

    @Column()
    date?: string;

    @Column()   
    status?: boolean;

    @ManyToOne(() => User, (user)=> user.tasks)
    user : User;

}
