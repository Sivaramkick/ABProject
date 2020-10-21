import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddUsersComponent } from './../add-users/add-users.component'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
 
  constructor(private router: Router,
              private activateRoute: ActivatedRoute,
              private matdailog: MatDialog) {
               
               }

  rows = [];
  txtSearch: any = '';
  ddlRoles: any = 0;
  ddlDesg: any = 0;

  Roles: any = [];
  ngOnInit() {
    // this.fetch((data) => {
      this.gridBind();
      this.Roles = [
        {'id' : 1, 'name': 'Admin'},
        {'id': 2, 'name': 'Employee'},
        {'id': 3, 'name': 'Manager'},
        {'id': 4, 'name': 'Assistent-Manager'},
      ]
   // });
  }

  // fetch(cb) {
  //   const req = new XMLHttpRequest();
  //   req.open('GET', `http://swimlane.github.io/ngx-datatable/assets/data/company.json`);

  //   req.onload = () => {
  //     const data = JSON.parse(req.response);
  //     cb(data);
  //   };

  //   req.send();
  // }

  gridBind() {
    this.rows = [{'Name': 'Sivaramakrishna',
    'Email': 'Sivaram@gmail.com',
    'Role': 1,
    'Designation':'1',
    'Company':'PLLC'
  },{'Name': 'Sivaramakrishna',
  'Email': 'Sivaram@gmail.com',
  'Role': 1,
  'Designation':1,
  'Company':'PLLC'
},{'Name': 'Sivaramakrishna',
'Email': 'Sivaram@gmail.com',
'Role': 2,
'Designation':2,
'Company':'PLLC'
},{'Name': 'Sivaramakrishna',
'Email': 'Sivaram@gmail.com',
'Role': 3,
'Designation':3,
'Company':'PLLC'
},{'Name': 'Sivaramakrishna',
'Email': 'Sivaram@gmail.com',
'Role': 2,
'Designation':2,
'Company':'PLLC'
},{'Name': 'Sivaramakrishna',
'Email': 'Sivaram@gmail.com',
'Role': 3,
'Designation':3,
'Company':'PLLC'
},{'Name': 'Sivaramakrishna',
'Email': 'Sivaram@gmail.com',
'Role': 3,
'Designation':3,
'Company':'PLLC'
}];
  }

  search_click() {
    this.rows = this.rows.filter(x => x.Role === this.ddlRoles)
  }
  searchCancel_click() {
    this.gridBind();
  }
  AddUsers() {
    this.router.navigate(["Users/AddUsers"]);
    // const dailogref = this.matdailog.open(AddUsersComponent, {
    //   width: '800px',
    //   data:'',
    //   panelClass: 'nopadding',
    //   disableClose: true
    // });
    // dailogref.afterClosed().subscribe(result => {

    // });
  }

}
