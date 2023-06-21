import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kanbanprojecttoolheader',
  templateUrl: './kanbanprojecttoolheader.component.html',
  styleUrls: ['./kanbanprojecttoolheader.component.scss']
})
export class KanbanprojecttoolheaderComponent {

  constructor(private router: Router) {}

  async logoutUser() {
    const requestOptions = {
      method: 'POST',
    };

    const url = 'http://127.0.0.1:8000/api/logout/';


      const resp = await fetch(url, requestOptions);
      const json = await resp.json();

      if (resp.ok) {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        this.router.navigate(['/login']);
      } else {
        console.log('User logout failed:', json);
      }
}

  toggleLogout(){
    document.getElementById('logout-span')?.classList.toggle('d-none');
  }


}
