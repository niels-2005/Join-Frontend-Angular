import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-forgot-my-password',
  templateUrl: './forgot-my-password.component.html',
  styleUrls: ['./forgot-my-password.component.scss']
})
export class ForgotMyPasswordComponent {

  email: string = "";

  @ViewChild('fmpErrorMessage', { static: false }) fmpErrorMessage!: ElementRef;

  isButtonDisabled = false;

  emailSended = false;

  switchToLoginContainer() {
    document.getElementById('sign-in-button-container')!.classList.remove('d-none');
    document.getElementById('login-container')!.classList.remove('d-none');
    document.getElementById('fmp-container')!.classList.add('d-none');
  }

  async sendResetMail(){
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "email": this.email
    });

    const requestOptions : RequestInit= {
      method: 'POST',
      headers: myHeaders,
      body: raw,
};

const resp = await fetch("http://127.0.0.1:8000/api/reset/password/", requestOptions);

this.isButtonDisabled = true;

if (resp.ok) {
  const result = await resp.json();
  console.log(result);
  this.emailSended = true;
} else {
  const errorData = await resp.json();
  console.log('error', errorData);
  this.fmpErrorMessage.nativeElement.textContent = errorData.detail;
  this.isButtonDisabled = false;
}
}
}
