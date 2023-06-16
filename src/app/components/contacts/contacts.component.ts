import { Component } from '@angular/core';
import { ContactserviceService } from 'src/app/services/contactservice.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {

  contacts!: { [key: string]: any };

  constructor(private contactService: ContactserviceService) { }

  ngOnInit(): void {
    this.contacts = this.groupByInitial(this.contactService.getContacts());
  }

  groupByInitial(contacts: { name: string, initial: string, color: string }[]) {
    const groupedContacts: { [key: string]: { name: string, initial: string, color: string }[] } = {};

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


}

