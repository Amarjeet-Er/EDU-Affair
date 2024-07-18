import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(
    private _snacker: MatSnackBar
  ) { }
  appCurrentVersion = new BehaviorSubject<number>(1.1)

  base_url = new BehaviorSubject<string>('https://eduaffair.in/api/')
  img_url = new BehaviorSubject<string>('https://eduaffair.in')
  pdf_open_url = new BehaviorSubject<string>(`https://turningbrain.in/api/AllNotes?filename=`)
  country_name = new BehaviorSubject('')
  send_otp_number = new BehaviorSubject(0)
  email = new BehaviorSubject<string>('')
  mobile = new BehaviorSubject<number>(0)
  veryfiy_number = new BehaviorSubject(0)
  send_otp_email = new BehaviorSubject(0)
  premiumData = new BehaviorSubject<object>({})
  premiumDescData = new BehaviorSubject<object>({})
  user_id = new BehaviorSubject<number>(0)
  course_id = new BehaviorSubject<number>(0)
  subject_id = new BehaviorSubject<number>(0)
  unit_id = new BehaviorSubject<number>(0)
  video_id = new BehaviorSubject<number>(0)
  pdf_file_name = new BehaviorSubject<string>('')
  student_data = new BehaviorSubject<object>({})
  privous_url = new BehaviorSubject<string>('/home')
  videoyatest = new BehaviorSubject<string>('')
  PlanA = new BehaviorSubject<boolean>(false)
  PlanB = new BehaviorSubject<boolean>(true)
  emailOTP = new BehaviorSubject(0)
  mcqType = new BehaviorSubject<string>('')
  freevidoePlay = new BehaviorSubject<object>({})
  package_purchase = new BehaviorSubject<Object>(
    {
      id: '16',

    })



  // for tost 

  tostDelay(title: any) {
    this._snacker.open(title, '',
      {
        duration: 5000, verticalPosition: 'bottom', horizontalPosition: 'end',
        panelClass: ['tostSuccess']
      });
  }

  tostSuccessBottom(title: any) {
    this._snacker.open(title, '',
      {
        duration: 3000, verticalPosition: 'bottom', horizontalPosition: 'end',
        panelClass: ['tostSuccess']
      });
  }

  tostSuccessTop(title: any) {
    this._snacker.open(title, '',
      {
        duration: 3000, verticalPosition: 'bottom', horizontalPosition: 'end',
        panelClass: ['tostSuccess']
      });
  }

  tostErrorTop(title: any) {
    this._snacker.open(title, '',
      {
        duration: 3000, verticalPosition: 'top', horizontalPosition: 'end',
        panelClass: ['tostError']
      });
  }

  tostErrorBottom(title: any) {
    this._snacker.open(title, '',
      {
        duration: 3000, verticalPosition: 'bottom', horizontalPosition: 'end',
        panelClass: ['tostError']
      });
  }



}
