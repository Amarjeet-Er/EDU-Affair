import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/servies/crud.service';
import { SharedService } from 'src/app/servies/shared.service';

@Component({
  selector: 'app-verify-with-email',
  templateUrl: './verify-with-email.component.html',
  styleUrls: ['./verify-with-email.component.css']
})
export class VerifyWithEmailComponent {
  otpForm !: FormGroup
  backup: number = 0
  emailOTP: any = 0
  country_name: any
  userEmail: any;
  constructor(
    private _crud: CrudService,
    private _routing: Router,
    private _shared: SharedService,
    private _fb: FormBuilder,
    private http: HttpClient

  ) {
    this._shared.country_name.subscribe(
      (res: any) => {
        console.log(res);
        this.country_name = res

      }
    )
  }


  ngOnInit(): void {
    this.otpForm = this._fb.group(
      {
        inp1: ['',
          Validators.required,
        ],
        inp2: ['',
          Validators.required,
        ],
        inp3: ['',
          Validators.required,
        ],
        inp4: ['',
          Validators.required,
        ],
        inp5: ['',
          Validators.required,
        ],
        inp6: ['',
          Validators.required,
        ],
      }
    )

    this._shared.email.subscribe(
      (res: any) => {
        this.userEmail = res
      }
    )

    this.startBackup()
  }



  startBackup() {
    let counter = 60;
    this.updateCounter(counter);
    const intervalId = setInterval(() => {
      counter--;
      if (counter <= 0) {
        clearInterval(intervalId);
      } else {
        this.updateCounter(counter);
      }
    }, 1000);
  }

  updateCounter(value: any) {
    this.backup = value
  }


  ngOnDestroy() {
    this.updateCounter(0)
  }

  verify() {

    this._shared.emailOTP.subscribe(
      (res: any) => {
        console.log('mail otp' + res);
        this.emailOTP = res
      }
    )

    const data = this.otpForm.value
    console.log(data);

    const isotp = Object.values(data).join("")
    console.log('input otp' + isotp);

    if (isotp == this.emailOTP) {
      this._shared.tostSuccessTop('OTP Match Successfully')
      if (this.country_name == 'India') {
        this._routing.navigate(['/signupwithmobile'])

      } else {
        this._routing.navigate(['/signupwithemail'])

      }
      this._shared.email.next(this.userEmail)
    } else {
      this._shared.tostErrorTop('Invalid OTP')
    }
  }

  reSendOtp() {
    this.http.post(`https://eduaffair.in/api/RegistrationOTP?EmailId=${this.userEmail}`, {}).subscribe(
      (res: any) => {
        if (res.message === 'OTP sent successfully') {
          this._shared.tostSuccessBottom('OTP Resend on Your Email..')
          this._shared.emailOTP.next(res.Otp)
        }
        if (res.Message === 'Email already exists') {
          this._shared.tostErrorBottom('This email alredy exit')
        }
      }
    )
  }
}
