import { Component, OnInit } from '@angular/core';
import {Task} from '../model/task';
import { ApiService } from '../utils/api.service';


@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit{

  constructor(private apiService:ApiService){}

  taskForm:Task = new Task()
  ngOnInit(): void {}

  onSubmit(){
    console.log("submit button as been clicked")
    this.apiService.post('task',this.taskForm).subscribe()
  }

}
