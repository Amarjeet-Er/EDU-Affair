import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/servies/crud.service';
import { SharedService } from 'src/app/servies/shared.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile_data: any
  profile_img: any
  profile_url: any
  img_url: string = ''
  profile_form !: FormGroup
  State: boolean = true
  login_data: any;
  login: any;
  constructor(
    private _crud: CrudService,
    private _shared: SharedService,
    private _fb: FormBuilder,
    private _router: Router

  ) {
    this.login = localStorage.getItem('loginData')
    this.login_data = JSON.parse(this.login)    
    
    this.profile_data = this._router.getCurrentNavigation()?.extras
  }

  ngOnInit() {
    this.profile_form = this._fb.group({
      Id: [''],
      Name: ['', Validators.required],
      EmailId: ['', Validators.required],
      CourseName: ['', Validators.required],
      CountryName: ['', Validators.required],
      State: [''],
      College: ['', Validators.required],
      MobileNo: ['', Validators.required],

    })

    this.profile_form.patchValue(this.profile_data)
    console.log(this.profile_data);
    if (this.profile_data.State == '') {
      this.State = false
    }
    this._shared.img_url.subscribe(
      (res: any) => {
        console.log(res);
        this.img_url = res
      }
    )
  }

  onUpdate() {
    console.log(this.profile_form.value);
    const fromdata = new FormData()
    fromdata.append('Id', this.login_data.id)
    fromdata.append('Name', this.profile_form.get('Name')?.value)
    fromdata.append('State', this.profile_form.get('State')?.value)
    fromdata.append('College', this.profile_form.get('College')?.value)
    fromdata.append('Inst_Id', this.login_data.inst_id)

    if (this.profile_img) {
      fromdata.append('profile', this.profile_img)
      console.log(this.profile_img);

    } else {
      fromdata.append('profile', this.profile_data.Profile)
      console.log("same url" + this.profile_data.Profile);
    }

    this._crud.profile_update(fromdata, this.profile_data.Id).subscribe(
      (res: any) => {
        console.log(res);
        if (res == 'Updated Successfully') {
          this._shared.tostSuccessTop('Profile Update')
        }
      }
    )
  }


  isEdit: boolean = true

  onEdit() {
    if (this.isEdit == true) {
      this.isEdit = false
    } else {
      this.isEdit = true
    }
  }


  onProfile(files: any) {
    if (files.length === 0) {
      return;
    }
    let mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
    let reader = new FileReader();
    this.profile_img = files[0];
    reader.onload = () => {
      this.profile_url = reader.result;
    };

    reader.readAsDataURL(this.profile_img);
  }

  isMobile: boolean = true
  isEmail: boolean = true
  isCourse: boolean = true
  isCompany: boolean = true
  enableValidation(val: string) {
    console.log(val);

    if (val == 'mobile') {
      this.isMobile = false
    }
    if (val == 'email') {
      this.isEmail = false
    }
    if (val == 'course') {
      this.isCourse = false
    }
    if (val == 'companyName') {
      this.isCompany = false
    }

  }

  disableValidation(val: string) {
    if (val == 'mobile') {
      this.isMobile = true
    }
    if (val == 'email') {
      this.isEmail = true
    }
    if (val == 'course') {
      this.isCourse = true
    }
    if (val == 'companyName') {
      this.isCompany = true
    }
  }
}
