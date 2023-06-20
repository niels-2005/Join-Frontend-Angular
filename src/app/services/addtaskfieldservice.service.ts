import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddtaskfieldserviceService {

  constructor() { }

  openTaskField(id1: string) {
    document.getElementById('add-task-field')?.classList.add('show-task-field');
    document.getElementById(id1)?.classList.add('give-opacity');
    document.getElementById('sitebar')?.classList.add('give-opacity');
    document.getElementById('kanban-header')?.classList.add('give-opacity');
  }

  closeTaskField(id1: string) {
    document.getElementById('add-task-field')?.classList.remove('show-task-field');
    document.getElementById(id1)?.classList.remove('give-opacity');
    document.getElementById('sitebar')?.classList.remove('give-opacity');
    document.getElementById('kanban-header')?.classList.remove('give-opacity');
  }
}
