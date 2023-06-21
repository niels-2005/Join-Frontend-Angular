import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ContactserviceService, Contact } from 'src/app/services/contactservice.service';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.scss']
})
export class AddtaskComponent implements OnInit {

  taskForm!: FormGroup;
  myControl = new FormControl();
  allContacts: Contact[] = [];


  constructor(private fb: FormBuilder, private contactService: ContactserviceService) {}

  async ngOnInit(): Promise<void> {
    this.initTaskForm();
  }


  private initTaskForm(): void {
    this.taskForm = this.fb.group({
      title: [''],
      description: [''],
      category: [''],
      assignedTo: this.myControl,
      dueDate: [''],
      prio: [''],
      subtask: ['']
    });
  }

  clearTaskField(){
    this.taskForm.reset();
    document.getElementById('prio-urgent')?.classList.remove('bg-urgent-while-clicked');
    document.getElementById('prio-medium')?.classList.remove('bg-medium-while-clicked');
    document.getElementById('prio-low')?.classList.remove('bg-low-while-clicked');
  }

  selectedPrio(id1: string, id2: string, id3: string, classnameToggle: string, removedClassOne: string, removedClassTwo: string) {
    document.getElementById(id1)!.classList.toggle(classnameToggle);
    document.getElementById(id2)!.classList.remove(removedClassOne);
    document.getElementById(id3)!.classList.remove(removedClassTwo);
  }
}
