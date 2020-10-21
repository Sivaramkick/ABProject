import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }
  Logout() {
    localStorage.removeItem('loggedInEmpId');
    this.router.navigate(['Login']);
  }
}
