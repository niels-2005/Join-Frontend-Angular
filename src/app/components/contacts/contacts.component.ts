import { Component } from '@angular/core';
import { AddtaskfieldserviceService } from 'src/app/services/addtaskfieldservice.service';
import { ContactserviceService } from 'src/app/services/contactservice.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {

  contacts!: { [key: string]: any };

  constructor(private contactService: ContactserviceService, private popupService: AddtaskfieldserviceService) {
    this.contactService.contacts$.subscribe(groupedContacts => {
      this.contacts = groupedContacts;
    });
  }

  async ngOnInit(): Promise<void> {
    await this.contactService.getContacts();
  }

  groupByInitial(contacts: { name: string, initial: string, color: string, email: string, phone: string }[]) {
    const groupedContacts: { [key: string]: { name: string, initial: string, color: string, email: string, phone: string }[] } = {};

    for (const contact of contacts) {
      if (!groupedContacts[contact.initial]) {
        groupedContacts[contact.initial] = [];
      }
      groupedContacts[contact.initial].push(contact);
    }
    return groupedContacts;
  }

  getInitials(name: string) {
    return name.split(' ').map((n,i,a)=> i === 0 || i+1 === a.length ? n[0] : null).join('').toUpperCase();
  }

  openTaskField(id1: string) {
    this.popupService.openTaskField(id1);
  }

}
