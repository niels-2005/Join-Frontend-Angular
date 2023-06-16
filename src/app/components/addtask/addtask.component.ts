import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.scss']
})
export class AddtaskComponent {


  constructor (private fb: FormBuilder) {}

  taskForm!: FormGroup;


  clearTaskField(){
    this.taskForm.reset();
    document.getElementById('prio-urgent')?.classList.remove('bg-urgent-while-clicked');
    document.getElementById('prio-medium')?.classList.remove('bg-medium-while-clicked');
    document.getElementById('prio-low')?.classList.remove('bg-low-while-clicked');
  }


  ngOnInit(): void {
    this.taskForm = this.fb.group({
      title: [''],
      description: [''],
      category: [''],
      assignedTo: [''],
      dueDate: [''],
      prio: [''],
      subtask: ['']
    });
  }

    selectedPrio(id1: string, id2: string, id3: string, classnameToggle: string, removedClassOne: string, removedClassTwo: string) {
    document.getElementById(id1)!.classList.toggle(classnameToggle);
    document.getElementById(id2)!.classList.remove(removedClassOne);
    document.getElementById(id3)!.classList.remove(removedClassTwo);
  }


}
