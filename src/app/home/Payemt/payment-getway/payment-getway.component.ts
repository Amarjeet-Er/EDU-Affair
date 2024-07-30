import { Component } from '@angular/core';
import { RazorpayService } from 'src/app/servies/razorpay.service';
import { Checkout } from 'capacitor-razorpay';

@Component({
  selector: 'app-payment-getway',
  templateUrl: './payment-getway.component.html',
  styleUrls: ['./payment-getway.component.css']
})
export class PaymentGetwayComponent {
  amount: number = 0;
  orderId: string = ''
  constructor(
    private razorpayService: RazorpayService
  ) { }


  makePayment(rs: any) {
    this.amount = rs
    console.log(rs);

    this.createOrderL(rs)
    // this.createOrderLocal(rs)
  }


  // for live data base .net 
  createOrderL(amount:string): void {
    this.razorpayService.createOrderLive(amount)
      .subscribe(
        (response) => {
          console.log(response.Attributes);
          this.orderId = response.Attributes.id;
          this.payWithLive(response.Attributes.id, response.Attributes.amount)
          // this.payWithLocal(response.Attributes.id, response.Attributes.amount)
        },
        (error) => {
          console.error(error);
        }
      );

    console.log(`order id${this.orderId}`);

  }

  async payWithLive(order_id: string, amount: string) {
    console.log('orderid'+order_id)
    console.log('amount'+amount)
    const options = {
      key: 'rzp_test_YGORtbwcCRzFxD',
      amount: amount,
      description: 'EDU Affair',
      order_id: order_id,
      currency: 'INR',
      name: 'EDU Affair',
      prefill: {
        name: 'Akhilesh Kumar',
        email: 'akhileshkr1098@gmail.com',
        contact: '6202572787'
      },
      theme: {
        color: '#f49004'
      }
    }


    try {
      let data = (await Checkout.open(options));
      console.log(data.response);
      this.verifyPaymentLive(data.response)
    } catch (error) {


    }
  }


  verifyPaymentLive(data:any) {
    const order_id = data.razorpay_order_id;
    const payment_id = data.razorpay_payment_id;
    const razorpay_signature = data.razorpay_signature;

    this.razorpayService.verifyOrderLive(order_id, payment_id, razorpay_signature)
      .subscribe(
        (response) => {
          console.log(response); 
          if (response === 'Success') {
              alert('Payment success Data insert')
          }
        },
        (error) => {
          console.error(error); 
          alert('Payment Faild Try again')

        }
      );
  }






  // for local working with node js 

  createOrderLocal(amount:string) {
    this.razorpayService.createOrderLocal(amount)
      .subscribe(
        (response) => {
          console.log(response);
          this.orderId = response.id;
          this.payWithLocal(response.id, response.amount)
        },
        (error) => {
          console.error(error);
        }
      );

  }

  // for open ui of payment getway 

  async payWithLocal(order_id: string, amount: string) {
    const options = {
      key: 'rzp_test_YGORtbwcCRzFxD',
      amount: amount,
      description: 'EDU Affair',
      order_id: order_id.toString(),
      currency: 'INR',
      name: 'EDU Affair',
      prefill: {
        name: 'Akhilesh Kumar',
        email: 'akhileshkr1098@gmail.com',
        contact: '6202572787'
      },
      theme: {
        color: '#f49004'
      }
    }


    try {
      let data = (await Checkout.open(options));
      console.log(data.response);
      this.verifyPaymentLocal(data.response)
      

    } catch (error) {
    }
  }



  verifyPaymentLocal(data:any) {
    const order_id = data.razorpay_order_id;
    const payment_id = data.razorpay_payment_id;
    const razorpay_signature = data.razorpay_signature;

    this.razorpayService.verifyOrderLocal(order_id, payment_id, razorpay_signature)
      .subscribe(
        (response) => {
          console.log(response); 
        },
        (error) => {
          console.error(error); 
        }
      );
  }
}
