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

  async ngOnInit(): Promise<void> {
    const fetchedContacts = await this.contactService.getContacts();
    this.contacts = this.groupByInitial(fetchedContacts);
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

}
