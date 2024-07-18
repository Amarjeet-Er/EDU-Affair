import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/servies/shared.service';

@Component({
  selector: 'app-reg-with-email',
  templateUrl: './reg-with-email.component.html',
  styleUrls: ['./reg-with-email.component.css']
})
export class RegWithEmailComponent {
  country: any
  constructor(
    private _router: Router,
    private _shared: SharedService,
    private http: HttpClient
  ) {
    this._shared.country_name.subscribe(
      (res: any) => {
        console.log(res);
        this.country = res
      }
    )
  }

  SendOTP(email: any) {
    const fromdata = new FormData()
    fromdata.append('Email_Mob', email)
    fromdata.append('country', this.country)
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    this.http.post(`https://eduaffair.in/api/RegistrationOTP?EmailId=${email}`, {}).subscribe(
      (res: any) => {
        console.log(res);
        if (res.message === 'OTP sent successfully') {
          this._shared.tostSuccessBottom('OTP send on Your Email..')
          this._shared.emailOTP.next(res.Otp)

          this._router.navigate(['/vrifywithemail'])

        }

        if (res.Message === 'Email already exists') {
          this._shared.tostErrorBottom('This email alredy exit')
        }
      }
    )

    this._shared.email.next(email)

  }
}
