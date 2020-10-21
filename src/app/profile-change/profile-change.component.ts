import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {ImageCropperComponent, ImageCroppedEvent } from 'ngx-image-cropper';


@Component({
  selector: 'app-profile-change',
  templateUrl: './profile-change.component.html',
  styleUrls: ['./profile-change.component.scss']
})
export class ProfileChangeComponent implements OnInit {
  loading = false;

  imageChangedEvent: any = '';
  croppedImage: any = '';
  imageFile: any;
  constructor( private dialogRef: MatDialogRef<ProfileChangeComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any,) { 
      this.loading = true;
    }

  ngOnInit(): void {
    this.imageChangedEvent = this.data.data;
  }
 
imageCropped(event) {
    this.croppedImage = event.base64;
    const imageBlob = event;
    this.imageFile = new File([imageBlob], 'image.jpeg', { type: 'image/jpeg' });
    this.loading = false;
}

  imageCroppedBase64(event) {
    this.croppedImage = event;
    this.loading = false;
  }
  imageCroppedFile(event) {
    // const imageBlob = event;
    // this.imageFile = new File([imageBlob], 'image.jpeg', { type: 'image/jpeg' });
    // this.loading = false;
  }
  imageLoaded() {
    // show cropper
  }
  cropperReady() {
    // cropper ready
  }
  loadImageFailed() {
    // show message
    // this.alert.error({ msg: 'unable to load file' });
  }

  btnCancelImage_click() {
    const arr = { status: false, data: '' };
    this.dialogRef.close(arr);
  }

  btnSaveImage_click() {
    // const imageBlob = this.b64toBlob(this.croppedImage);
    const file = this.imageFile;
    //if (this.data.type === 'S') {
      this.loading = true;
      const fd = new FormData();
      fd.append('folder', 'profile');
      fd.append('eid', localStorage.getItem('EmployeeId'));
      fd.append('Ltype', localStorage.getItem('Ltype'));
      //console.log(file.size);
      fd.append('image', file);
      // this.api.uploadFiles('SaveProfileImage/', fd).subscribe(
      //   (res) => {
      //     //console.log(res);
      //     if (res.toString().indexOf('successfully') > -1) {
      //       this.alert.success([{ msg: res.toString() }]);
      //       const arr = { status: true, data: '' };
            this.dialogRef.close(fd);
    //       }
    //     }, (error) => {
    //       this.alert.error([{ msg: 'Unable to connect API, Please try after sometime.' }]);
    //       this.loading = true;
    //     }, () => {
    //       this.loading = true;
    //     }
    //   );
    // } else {
    //   const arr = { status: true, data: file, src: this.croppedImage };
    //   this.dialogRef.close(arr);
    // }
  }
}
