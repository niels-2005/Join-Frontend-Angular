import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

type Contact = {
  name: string;
  initial: string;
  color: string;
  email: string;
  phone: string;
}

type GroupedContacts = { [key: string]: Contact[] };

@Injectable({
  providedIn: 'root'
})
export class ContactserviceService {
  private contacts = new Subject<GroupedContacts>();
  contacts$ = this.contacts.asObservable();

  private getHeaders(): Headers {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Token ce7ec33f2e134130748df55fc7dd7f27a6089b14");
    return myHeaders;
  }

  private getRequestOptions(): RequestInit {
    return {
      method: 'GET',
      headers: this.getHeaders(),
    };
  }

  async getContacts(): Promise<void> {
    const requestOptions = this.getRequestOptions();

    const response = await fetch("http://127.0.0.1:8000/api/join/contacts", requestOptions)
    const data = await response.json();

    const contacts = data.map((contact: any): Contact => {
      return {
        name: contact.name,
        email: contact.email,
        phone: contact.phone,
        initial: contact.name.charAt(0),
        color: contact.color
      };
    });

    this.contacts.next(this.groupByInitial(contacts));
  }

  groupByInitial(contacts: Contact[]): GroupedContacts {
    const groupedContacts: GroupedContacts = {};

    for (const contact of contacts) {
      if (!groupedContacts[contact.initial]) {
        groupedContacts[contact.initial] = [];
      }

      groupedContacts[contact.initial].push(contact);
    }

    return groupedContacts;
  }
}
