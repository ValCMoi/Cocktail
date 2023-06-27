import { Component } from '@angular/core';
import {Task} from '../model/task';
import { ApiService } from '../utils/api.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  task: Task = new Task();

  constructor(private apiService: ApiService) { }

  onSubmit() {
    console.log('Le formulaire a été soumis');
    console.log(this.task);
    // Appel à votre service ApiService pour enregistrer la tâche
    this.apiService.post('task', this.task).subscribe(() => {
      // Réinitialiser le formulaire après l'enregistrement réussi
      this.task = new Task();
    });
  }
}
