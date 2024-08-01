import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from '../servies/shared.service';
import { CrudService } from '../servies/crud.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  send_otp: boolean = true
  verify_otp: boolean = false
  passwordChange: boolean = false
  email: string = ''
  passwordForm !: FormGroup
  CPwd: boolean = false
  login: any;
  login_data: any;
  InstId: any;

  constructor(
    private _crud: CrudService,
    private _routing: Router,
    private _fb: FormBuilder,
    private _shared: SharedService
  ) {
    this.login = localStorage.getItem('loginData')
    this.login_data = JSON.parse(this.login)
  }


  ngOnInit() {
    this.passwordForm = this._fb.group(
      {
        password: [
          '', [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(30),
            Validators.pattern(/[A-Z]/),
            Validators.pattern(/[a-z]/),
            Validators.pattern(/[0-9]/),
            Validators.pattern(/[!@#$]/),
          ]
        ],

        Cpassword: ['', Validators.required]
      }
    )
  }


  sendOTP(email: any) {
    this._crud.SendOTPforgetPassword(email).subscribe(
      (res: any) => {
        console.log(res);
        if (res.Status == "Success") {
          this.email = email
          this.send_otp = false
          this.verify_otp = true
          this._shared.tostSuccessBottom('OTP send on your email ...')
        }
      }, (error) => {
        this._shared.tostErrorTop('Email not found')
      }
    )
  }


  Cpass(password: any) {
    this.CPwd = true

    console.log(password.target.value);
    if (this.passwordForm.get('password')?.value == password.target.value) {
      this.CPwd = false
    }

  }
  verifyOTP(otp: any) {
    console.log(otp, 'otp fill');
    
    const fromdata = new FormData()
    fromdata.append('OTP', otp)
    this._crud.veryfy_otpFrogetPassword(this.email, fromdata).subscribe(
      (res: any) => {
        console.log(res, 'status');
        this.InstId = res.Inst_Id;
        if (res.Status == "Matched OTP") {
          this.send_otp = false
          this.verify_otp = false
          this.passwordChange = true
          this._shared.tostSuccessBottom('OTP Match Successfully ')
          console.log(res.Status, 'status');

        }
      }, (error) => {
        console.log(error);
        this._shared.tostErrorTop('Invalid OTP')

      }
    )
  }
  chnagePassword(password: string) {
    if (!this.passwordForm.valid) {
      this._shared.tostErrorTop('Plz..  Fill all the filds')
    } else {
      if (this.CPwd == true) {
        this._shared.tostErrorTop('Password not match')
        return
      }
      this._crud.change_password(this.email, password, this.InstId).subscribe(
        (res: any) => {
          console.log(res);
          if (res == 'Password Updated Successfully') {
            this._routing.navigate(['/'])
            this._shared.tostSuccessBottom('Password change Plz.. Login')
          }

        }
      )
    }

  }
}
