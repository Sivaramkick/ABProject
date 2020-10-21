import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUsersComponent } from './add-users/add-users.component';
import { UsersComponent } from './users/users.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon'
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ImageCropperModule } from 'ngx-image-cropper';
import {ProfileChangeComponent} from './../profile-change/profile-change.component';
import {MatSelectModule} from '@angular/material/select';

const routes: Routes = [
  {path:'', component: UsersComponent},
  {path:'AddUsers', component: AddUsersComponent}
]

@NgModule({
  declarations: [AddUsersComponent, UsersComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    NgxDatatableModule,
    FormsModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatCheckboxModule,
    ImageCropperModule,
    MatSelectModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  entryComponents: [AddUsersComponent, ProfileChangeComponent]
})
export class UsersModule { }
