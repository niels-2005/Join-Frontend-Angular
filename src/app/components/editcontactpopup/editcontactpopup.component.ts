import { Component, Input } from '@angular/core';
import { AddtaskfieldserviceService } from 'src/app/services/addtaskfieldservice.service';
import { ContactserviceService } from 'src/app/services/contactservice.service';

@Component({
  selector: 'app-editcontactpopup',
  templateUrl: './editcontactpopup.component.html',
  styleUrls: ['./editcontactpopup.component.scss']
})
export class EditcontactpopupComponent {


  @Input() selectedContact: any = {};


  constructor(private popupService: AddtaskfieldserviceService, private contactService: ContactserviceService) {}

  closeContactField(id1: string, id2: string){
    this.popupService.closeTaskField(id1, id2);
  }

  async deleteContact() {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Token ce7ec33f2e134130748df55fc7dd7f27a6089b14");
    myHeaders.append("Content-Type", "application/json");

    const requestOptions: RequestInit = {
        method: 'DELETE',
        headers: myHeaders
    };

    const url = `http://127.0.0.1:8000/api/join/contacts/${this.selectedContact.id}/`;

    try {
        const resp = await fetch(url, requestOptions);

        if (resp.ok) {
            console.log('Contact deletion successful');
            this.closeContactField('edit-contact-field', 'contacts-container');
            this.contactService.getContacts();
            this.selectedContact = null;
            this.contactService.setSelectedContact(null);
        } else {
            const json = await resp.json();
            console.log('Contact deletion failed:', json);
        }
    } catch (error) {
        console.log('Error during contact deletion:', error);
    }
}

  async saveEditedContact() {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Token ce7ec33f2e134130748df55fc7dd7f27a6089b14");
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "name": this.selectedContact.name,
      "email": this.selectedContact.email,
      "phone": this.selectedContact.phone
    });

    const requestOptions: RequestInit = {
      method: 'PATCH',
      headers: myHeaders,
      body: raw,
    };

    const url = `http://127.0.0.1:8000/api/join/contacts/${this.selectedContact.id}/`;

    try {
      const resp = await fetch(url, requestOptions);
      const json = await resp.json();

      if (resp.ok) {
        console.log('Contact update successful');
        this.closeContactField('edit-contact-field', 'contacts-container');
      } else {
        console.log('Contact update failed:', json);
        this.showUpdateErrorMessage(json);
      }
    } catch (error) {
      console.log('Error during contact update:', error);
    }
  }

  showUpdateErrorMessage(json: any) {
    this.showError('email-error-edit', json.email);
    this.showError('username-error-edit', json.name);
    this.showError('phone-error-edit', json.phone);
  }

  showError(elementId: string, error: string[] | undefined) {
    const element = document.getElementById(elementId);
    if (element && error) {
      element.innerHTML = error[0];
    }
  }

}
