import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactserviceService {

  constructor() { }

  getContacts(): { name: string, initial: string, color: string }[] {

    let contacts = [
      { name: 'Anastasia Müller', email:'tasia1706@gmail.com',  initial: 'A', color: '' },
      { name: 'Celine Müller', email:'bummelbiene@web.de',  initial: 'C', color: '' },
      { name: 'Benjamin Blümchen', email:'bluemchen2501@googlemail.com', initial: 'B', color: '' },
    ];
    return contacts;
  }


}
