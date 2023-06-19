import { Component } from '@angular/core';

@Component({
  selector: 'app-addcontactpopup',
  templateUrl: './addcontactpopup.component.html',
  styleUrls: ['./addcontactpopup.component.scss']
})
export class AddcontactpopupComponent {

  username: string = '';
  email: string = '';
  phone: string = '';

  closeContactField(){

  }

}
