import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/servies/crud.service';
import { SharedService } from 'src/app/servies/shared.service';

@Component({
  selector: 'app-chnage-password',
  templateUrl: './chnage-password.component.html',
  styleUrls: ['./chnage-password.component.css']
})
export class ChnagePasswordComponent implements OnInit {
  chnagePassword !: FormGroup
  login: any
  login_data: any
  CPwd: boolean = false
  loginId: any;
  login_id: any;
  constructor(
    private fb: FormBuilder,
    private _crud: CrudService,
    private _shared: SharedService,
    private _router: Router
  ) {
    this.loginId = localStorage.getItem('loginData')
    this.login_id = JSON.parse(this.loginId)
    
    this.login = localStorage.getItem('userData')
    this.login_data = JSON.parse(this.login)


  }

  ngOnInit() {
    this.chnagePassword = this.fb.group({
      old_password: ['', Validators.required],
      password: [
        '', [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(30),
          Validators.pattern(/[A-Z]/),
          Validators.pattern(/[a-z]/),
          Validators.pattern(/[0-9]/),
          Validators.pattern(/[!@#$]/),
        ],


      ],

      Cpassword: ['', Validators.required],
    }
    )
  }

  onSubmit() {
    console.log(this.login_data.Password);
    console.log(this.chnagePassword.get('old_password')?.value);

    if (!this.chnagePassword.valid) {
      this._shared.tostErrorTop('Plz Fill all filds..')
    } else {
      if (this.login_data.Password != this.chnagePassword.get('old_password')?.value) {
        return this._shared.tostErrorTop('Old Password incorrect')
      } else {
        if (this.CPwd == true) {
          return this._shared.tostErrorTop('Password not match')

          return
        }
        
        this._crud.change_password(this.login_data.EmailId, this.chnagePassword.get('password')?.value, this.login_id.inst_id).subscribe(
          (res: any) => {
            console.log(res);
            if (res == 'Password Updated Successfully') {
              this._shared.tostSuccessTop('Password Updated Plz. Login')
              this._router.navigate(['/'])
              localStorage.removeItem('loginData')
              localStorage.removeItem('userData')
            }
          }
        )
      }


    }



  }

  Cpass(password: any) {
    this.CPwd = true

    console.log(password.target.value);
    if (this.chnagePassword.get('password')?.value == password.target.value) {
      this.CPwd = false
    }

  }


}
