import { Component, OnInit } from '@angular/core';
import { HideOrShowPasswortInInputServiceService } from 'src/app/services/hide-or-show-passwort-in-input-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  ngOnInit(): void {
      setTimeout(() => {
        this.deleteAnimations();
      }, 2000);
  }

  deleteAnimations(){
    document.getElementById('login-container')!.classList.remove('fade-in-animation');
    document.getElementById('sign-in-button-container')!.classList.remove('fade-in-animation');
  }

  constructor(private hideOrShowPasswordService: HideOrShowPasswortInInputServiceService) { }

  showOrHidePassword(id1: string, id2: string, id3: string): void {
    this.hideOrShowPasswordService.showOrHidePassword(id1, id2, id3);
  }

  switchContainer(id1: string, id2: string, id3: string) {
    document.getElementById(id1)!.classList.add('d-none');
    document.getElementById(id2)!.classList.add('d-none');
    document.getElementById(id3)!.classList.remove('d-none');
  }
}
