import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddtaskfieldserviceService {

  constructor() { }

  openTaskField() {
    document.getElementById('add-task-field')?.classList.add('show-task-field');
  }

  closeTaskField() {
    document.getElementById('add-task-field')?.classList.remove('show-task-field');
  }
}
