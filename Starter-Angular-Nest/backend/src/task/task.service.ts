import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { Repository } from 'typeorm';
import { Observable, from } from 'rxjs';

@Injectable()
export class TaskService {

  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>
  ){}

  create(createTaskDto: CreateTaskDto):Observable<Task>{
    return from(this.taskRepository.save(createTaskDto));
  }

  findAll():Observable<Task[]> {
    return from(this.taskRepository.find())
  }

  findOne(id: string) {
    return `This action returns a #${id} task`;
  }

  update(id: string, updateTaskDto: UpdateTaskDto) {
    return `This action updates a #${id} task`;
  }

  remove(id: string) {
    return `This action removes a #${id} task`;
  }
}
