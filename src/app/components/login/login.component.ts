import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  showOrHidePassword(): void {
    const passwordInput = document.getElementById('password-input') as HTMLInputElement;
    const showPasswordImage = document.getElementById('show-password-image') as HTMLImageElement;
    const hidePasswordImage = document.getElementById('hide-password-image') as HTMLImageElement;

    if (this.passwordTypeIsPassword(passwordInput)) {
      this.changePasswordTypeToText(hidePasswordImage, showPasswordImage, passwordInput);
    } else if (this.passwordTypeIsText(passwordInput)) {
      this.changePasswordTypeToPassword(hidePasswordImage, showPasswordImage, passwordInput);
    }
  }

  passwordTypeIsPassword(passwordInput: any){
    return passwordInput && passwordInput.type === 'password'
  }

  changePasswordTypeToText(hidePasswordImage: HTMLImageElement, showPasswordImage: HTMLImageElement, passwordInput: any){
      hidePasswordImage.classList.add('d-none');
      showPasswordImage.classList.remove('d-none');
      passwordInput.type = 'text';
  }

  passwordTypeIsText(passwordInput: any){
    return passwordInput
  }

  changePasswordTypeToPassword(hidePasswordImage: HTMLImageElement, showPasswordImage: HTMLImageElement, passwordInput: any){
      showPasswordImage.classList.add('d-none');
      hidePasswordImage.classList.remove('d-none');
      passwordInput.type = 'password';
}

}
