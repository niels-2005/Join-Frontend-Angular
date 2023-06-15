import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddtaskfieldserviceService {

  constructor() { }

  openTaskField() {
    document.getElementById('add-task-field')?.classList.add('show-task-field');
    document.getElementById('board-container')?.classList.add('give-opacity');
    document.getElementById('sitebar')?.classList.add('give-opacity');
    document.getElementById('kanban-header')?.classList.add('give-opacity');
  }

  closeTaskField() {
    document.getElementById('add-task-field')?.classList.remove('show-task-field');
    document.getElementById('board-container')?.classList.remove('give-opacity');
    document.getElementById('sitebar')?.classList.remove('give-opacity');
    document.getElementById('kanban-header')?.classList.remove('give-opacity');
  }
}
