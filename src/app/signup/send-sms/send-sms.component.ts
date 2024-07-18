import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-send-sms',
  templateUrl: './send-sms.component.html',
  styleUrls: ['./send-sms.component.css']
})
export class SendSMSComponent {
  otp: number = 0
  constructor(
    private _http: HttpClient
  ) { }

  SendOTP(n: any) {
    this.otp = Math.floor(100000 + Math.random() * 900000);
    console.log(this.otp);
    
    this._http.get(`http://sms.designhost.in/api/mt/SendSMS?user=preetytaygi&password=123456&senderid=TRNBRN&channel=Trans&DCS=0&flashsms=0&number=${n}&text=Your OTP for sign up to Truning Brain is ${this.otp} valid for 10 minutes.

    Please do not share with anyone. 

Regards

Turning Brain

-Macreel &route=1&peid=1201159704614380365&DLTTemplateId=1207171014941934007`).subscribe(
      (res: any) => {
        console.log(res);
      }
    )
  }




}
