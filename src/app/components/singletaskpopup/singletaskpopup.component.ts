import { Component, Input, OnInit } from '@angular/core';
import { AddtaskfieldserviceService } from 'src/app/services/addtaskfieldservice.service';
import { ContactserviceService } from 'src/app/services/contactservice.service';
import { map, tap, first } from 'rxjs/operators';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-singletaskpopup',
  templateUrl: './singletaskpopup.component.html',
  styleUrls: ['./singletaskpopup.component.scss']
})
export class SingletaskpopupComponent implements OnInit {

  @Input() selectedTask: any = null;

  selectedPriority: string = "";

  taskForm!: FormGroup;

  showContacts: boolean = false;

  contacts$ = this.contactService.flatContacts$;

  constructor(private popupService: AddtaskfieldserviceService, private contactService: ContactserviceService, private fb: FormBuilder) {}

  async ngOnInit(): Promise<void> {
    this.initTaskForm();
    await this.contactService.getContacts();
  }

  getInitials(name: string): string {
    const names = name.split(",");
    const initials = names.map((n) => {
      const parts = n.trim().split(" ");
      return parts
        .map((p) => p.charAt(0))
        .join("");
    });
    return initials.join(", ");
  }

  closePopup(){
    this.popupService.removeOpacity();
    this.selectedTask = null;
  }

  selectedPrio(id1: string, id2: string, id3: string, classnameToggle: string, removedClassOne: string, removedClassTwo: string, prio: string) {
    setTimeout(() => {
      document.getElementById(id1)!.classList.toggle(classnameToggle);
      document.getElementById(id2)!.classList.remove(removedClassOne);
      document.getElementById(id3)!.classList.remove(removedClassTwo);
      this.selectedPriority = prio;
      console.log(this.selectedPriority);
    }, 100);
  }

  toggleContact(contact: any) {
    contact.checked = !contact.checked;
    this.updateAssignedTo();
  }


  updateAssignedTo() {
    this.contacts$.pipe(
      first(),
      tap(contacts => {
        let selectedContacts = contacts.filter(contact => contact.checked);
        let assignedToNames = selectedContacts.map(contact => contact.name).join(", ");
        this.taskForm.get('assignedTo')?.setValue(assignedToNames);
      })
    ).subscribe();
  }

  private initTaskForm(): void {
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

  changeContainer(id1: string, id2: string){
    document.getElementById(id1)?.classList.add('d-none');
    document.getElementById(id2)?.classList.remove('d-none');
  }

}
