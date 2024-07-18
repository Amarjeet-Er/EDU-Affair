import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RazorpayService {

  constructor(
    private http: HttpClient
  ) { }

  private baseUrl = 'http://localhost:3100';
  private baseUrlLive = 'https://eduaffair.in/api/';


  createOrderLive(amount: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrlLive}Payment?totalAmount=${amount}`, { amount });


  }

  verifyOrderLive(order_id: string, payment_id: string, razorpay_signature: string) {
    return this.http.post<any>(`${this.baseUrlLive}Payment_Confirmation?razorpay_payment_id=${payment_id}&razorpay_order_id=${order_id}&razorpay_signature=${razorpay_signature}`, {});
  }

  createOrderLocal(amount: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/razorpay/order`, { amount });
  }

  verifyOrderLocal(order_id: string, payment_id: string, razorpay_signature: string) {
    return this.http.post<any>(`${this.baseUrl}/verifyOrder`, { order_id, payment_id }, {
      headers: {
        'x-razorpay-signature': razorpay_signature
      }
    });
  }


  PaymentSuccessInsert(data: any) {
    console.log(data);
    return this.http.post(`https://turningbrain.in/api/Payment`, data)
  }

  
  PaymentFaildInsert(data: any) {
    console.log(data);
    return this.http.post(`https://turningbrain.in/api/Payment`, data)
  }


}