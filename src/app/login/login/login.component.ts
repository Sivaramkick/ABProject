import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide: any = true;
  checked: any = false;
  username: any = '';
  password: any = '';
  constructor(public router: Router) { }

  ngOnInit(): void {
  }
  Login() {

    if (this.username === 'admin' && this.password === 'admin') {
        this.router.navigate(['Dashboard']);
        localStorage.setItem('loggedInEmpId', '1');
    }
  }
}
