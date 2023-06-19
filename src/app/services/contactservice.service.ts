import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactserviceService {

  constructor() { }

  async getContacts(): Promise<{ name: string, initial: string, color: string, email: string, phone: string }[]> {

    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Token ce7ec33f2e134130748df55fc7dd7f27a6089b14");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
    };

    let response = await fetch("http://127.0.0.1:8000/api/join/contacts", requestOptions)
    let data = await response.json();

    let contacts = data.map((contact: any) => {
        return {
            name: contact.name,
            email: contact.email,
            phone: contact.phone,
            initial: contact.name.charAt(0),
            color: contact.color
        };
    });

    return contacts;
  }
}
