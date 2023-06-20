import { Component } from '@angular/core';
import { AddtaskfieldserviceService } from 'src/app/services/addtaskfieldservice.service';
import { ContactserviceService } from 'src/app/services/contactservice.service';

@Component({
  selector: 'app-addcontactpopup',
  templateUrl: './addcontactpopup.component.html',
  styleUrls: ['./addcontactpopup.component.scss']
})
export class AddcontactpopupComponent {

  name: string = '';
  email: string = '';
  phone: string = '';

  constructor(private popupService: AddtaskfieldserviceService, private contactService: ContactserviceService) {}

  closeContactField(id: string){
    this.popupService.closeTaskField(id);
  }

  private getHeaders(): Headers {
    const headers = new Headers();
    headers.append("Authorization", "Token ce7ec33f2e134130748df55fc7dd7f27a6089b14");
    headers.append("Content-Type", "application/json");
    return headers;
  }

  private getRequestOptions(): RequestInit {
    return {
      method: 'POST',
      headers: this.getHeaders(),
      body: JSON.stringify({
        "name": this.normalizeName(this.name),
        "email": this.email,
        "phone": this.phone
      }),
    };
  }

  async createContact() {
    const requestOptions = this.getRequestOptions();
    const url = "http://127.0.0.1:8000/api/join/contacts/";

      const response = await fetch(url, requestOptions);
      const data = await response.json();

      if (response.ok) {
        console.log('Contact creation successful');
        this.closeContactField('contacts-container');
        this.contactService.getContacts();
      } else {
        this.showContactCreationErrorMessage(data);
      }

  }

  normalizeName(name: string): string {
    return name.split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  }

  showContactCreationErrorMessage(data: any) {
    this.showError('email-error', data.email);
    console.log('Contact creation failed:', data);
  }

  showError(elementId: string, error: string[] | undefined) {
    const element = document.getElementById(elementId);
    if (element && error) {
      element.innerHTML = error[0];
    }
  }
}
