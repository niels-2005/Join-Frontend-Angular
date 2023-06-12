import { Component } from '@angular/core';
import { HideOrShowPasswortInInputServiceService } from 'src/app/services/hide-or-show-passwort-in-input-service.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(private hideOrShowPasswordService: HideOrShowPasswortInInputServiceService) { }

  showOrHidePassword(id1: string, id2: string, id3: string): void {
    this.hideOrShowPasswordService.showOrHidePassword(id1, id2, id3);
  }

  switchToLoginContainer() {
    document.getElementById('sign-in-button-container')!.classList.remove('d-none');
    document.getElementById('login-container')!.classList.remove('d-none');
    document.getElementById('register-container')!.classList.add('d-none');
  }

}
