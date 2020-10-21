import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ABProject';
  isLoggedIn: Boolean = false;
  loggedInUserId: any = localStorage.getItem('loggedInEmpId');
  constructor() {
    if (Number(this.loggedInUserId) > 0) {
      this.isLoggedIn = true;
    }
  }
}
