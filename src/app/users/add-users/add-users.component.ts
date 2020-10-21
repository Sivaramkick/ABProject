import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormvalidationsService } from './../../Global/formvalidations.service';
import {ProfileChangeComponent } from './../../profile-change/profile-change.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.scss']
})
export class AddUsersComponent implements OnInit {
  hide: any = true;
  @ViewChild('file') myfile: ElementRef;
  imgURL: any = '';
  Rolevalue: any;
  Roles: any = [
    {'id' : 1, 'name': 'Admin'},
    {'id': 2, 'name': 'Employee'},
    {'id': 3, 'name': 'Manager'},
    {'id': 4, 'name': 'Assistent-Manager'},
  ]
  addEmployee: any = {
    eid: 0,
    firstname: '',
    middlename: '',
    lastname: '',
    empID: '',
    empRole: '0',
    empRoleCategory: '0',
    userType: '0',
    DOB: '',
    startdate: '',
    maritalStatus: 'S',
    gender: 'M',
    ethnicity: '0',
    chnagedImg: 'https://servapi.onsitedealersolutions.com/Images/profile/profile.png',
    flagRatePay: '',
    empType: 'PT',
    empTypeEffictiveDate: new Date(),
    userID: '',
    passcode: '',
    email: '',
    address1: '',
    address2: '',
    phone: '',
    city: '',
    state: '0',
    zip: '',
    contactname: '',
    contactnumber: '',
    directDeposit: false,
    payment: 'HR',
    hourlyRates: '',
    paymentEffictiveDate: new Date(),
    accountDetails: [{
      rdValue: 1,
      bankName: '',
      bankNameError: '1px solid #ced4da',
      routing: '',
      routingError: '1px solid #ced4da',
      accountNumber: '',
      accountNumberError: '1px solid #ced4da'
    }],
    rdPrimary: '1',
    ddlGroup: '0',
    ddlAreas: [],
    ddlPayrolllSite: '0',
    siteEffectiveDate: new Date(),
    status: 'Y',
    SEFDEffictiveDate: new Date(),
    notes: '',
    action: 'A',
    hourlyBilling: false
  };
  editStatus = 'U';
  constructor(private validationService: FormvalidationsService,
    private dailog: MatDialog,
    private router: Router) { }

  ngOnInit(): void {
  }
  profileChange_click(event) {
    if (this.checkImageValidation(event)) {
      const arr = { data: event, type: 'U' };
      const dialogRef = this.dailog.open(ProfileChangeComponent, {
        width: '750px',
        panelClass: 'nopadding',
        data: arr,
        disableClose: true
      });

      dialogRef.afterClosed().subscribe(result => {
        this.myfile.nativeElement.value = null;
        let fb = new FormData();
        fb = result;
        let file: any = fb.get('image');
       
     
        var reader = new FileReader();
        const imagePath = file;
        reader.onload = (_event) => { 
          this.imgURL = reader.result; 
          
        }
        reader.readAsDataURL(file);
 
        // if (result.status) {
        //   this.addEmployee.chnagedImg = result.src;
        //   this.receivedFile = result.data;
        // }
      });
    }
  }
  checkImageValidation(event) {
    const msg = [];
    if (event.target.files.length > 0) {
      const imgname = event.target.files[0].name;
      if (this.validationService.isValidImage(imgname)) {
        this.validationService.addErrorMessage('Profile Image should only png or jpg or jpeg or gif only');
      }
      if (this.validationService.displayErrors()) { return true; } else {
        this.myfile.nativeElement.value = null;
        return false;
      }
    }
  }
  Submit() {

  }
  Cancel() {
      this.router.navigate(['Users']);
  }
}
