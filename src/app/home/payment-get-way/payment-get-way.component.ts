import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/servies/shared.service';

declare var Razorpay: any;

@Component({
  selector: 'app-payment-get-way',
  templateUrl: './payment-get-way.component.html',
  styleUrls: ['./payment-get-way.component.css']
})
export class PaymentGetWayComponent implements OnInit {
  premium_data: any
  constructor(
    private _shared: SharedService
  ) { }

  ngOnInit(): void {
    this._shared.premiumDescData.subscribe(
      (res: any) => {
        console.log(res);
        this.premium_data = res
      }
    )
  }

  payNow() {
    const RozarpayOptions = {
      description: 'TBrain',
      currency: 'INR',
      amount: 150000,
      name: 'EDU Affair',
      key: 'rzp_test_YGORtbwcCRzFxD',
      image: '../../../assets/turnaningBrain Logo.webp',
      prefill: {
        name: 'AKhilesh Kumar',
        email: 'akhilesh@gmail.com',
        phone: '6202572787'
      },
      theme: {
        color: '#f19109'
      },
      modal: {
        ondismiss:  () => {
          console.log('dismissed')
        }
      }
    }

    const successCallback = (paymentid: any) => {
      console.log(paymentid);
    }

    const failureCallback = (e: any) => {
      console.log(e);
    }

    Razorpay.open(RozarpayOptions,successCallback, failureCallback)
  }


  // Razorpay.Api.RazorpayClient client = new Razorpay.Api.RazorpayClient("rzp_test_7BhPEwf786ODHC", "S4allb8NhsBqyiGdXqxUA0St");

}
