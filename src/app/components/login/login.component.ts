import { Component, OnInit } from '@angular/core';
import { HideOrShowPasswortInInputServiceService } from 'src/app/services/hide-or-show-passwort-in-input-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string = '';
  email: string = '';
  password: string = '';

  async login() {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      username: this.username,
      email: this.email,
      password: this.password
    });

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
    };

    const url = 'https://nielsscholz.pythonanywhere.com/api/login/';

    try {
      const resp = await fetch(url, requestOptions);
      const json = await resp.json();

      if (resp.ok) {
        localStorage.setItem('token', json.key);
        localStorage.setItem('username', this.username);
        this.router.navigate(['/summary']);
        console.log('User login successful');
      } else {
        this.showLoginErrorMessage(json);
        console.log('User login failed:', json);
      }
    } catch (error) {
      console.log('Error during login:', error);
    }
  }

  showLoginErrorMessage(json: any) {
    this.showError('username-error-login', json.username);
    this.showError('email-error-login', json.email);
    this.showError('password-error-login', json.password);
    this.showError('password-error-login', json.non_field_errors);
  }

  showError(elementId: string, error: string[] | undefined) {
    const element = document.getElementById(elementId);
    if (element && error) {
      element.innerHTML = error[0];
    }
  }

  ngOnInit(): void {
      setTimeout(() => {
        this.deleteAnimations();
      }, 2000);
  }

  deleteAnimations(){
    document.getElementById('login-container')!.classList.remove('fade-in-animation');
    document.getElementById('sign-in-button-container')!.classList.remove('fade-in-animation');
  }

  constructor(private hideOrShowPasswordService: HideOrShowPasswortInInputServiceService, private router: Router) { }

  showOrHidePassword(id1: string, id2: string, id3: string): void {
    this.hideOrShowPasswordService.showOrHidePassword(id1, id2, id3);
  }

  switchContainer(id1: string, id2: string, id3: string) {
    document.getElementById(id1)!.classList.add('d-none');
    document.getElementById(id2)!.classList.add('d-none');
    document.getElementById(id3)!.classList.remove('d-none');
  }

   guestLogin() {
    this.router.navigate(['/summary']);
    localStorage.removeItem('username');
  }
}
