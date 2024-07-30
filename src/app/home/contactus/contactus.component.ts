import { Component } from '@angular/core';
import { CrudService } from 'src/app/servies/crud.service';
import { SharedService } from 'src/app/servies/shared.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {

  login: any
  login_data: any
  loginId: any
  login_Id: any;
  Mobile_No: any;
  Email_Id: any;
  constructor(
    private _crud: CrudService,
    private _shared: SharedService
  ) {
    this.login = localStorage.getItem('userData')
    this.login_data = JSON.parse(this.login)

    this.loginId = localStorage.getItem('loginData')
    this.login_Id = JSON.parse(this.loginId)
    this.Mobile_No = this.login_Id.MobileNo
    this.Email_Id = this.login_Id.EmailId
    console.log(this.Mobile_No, 'mobile');
    console.log(this.Email_Id, 'Email');
    
  } 
  RequstCall() {
    const data = this.login_data
    const instData = this.login_Id.inst_id;

    const fbData = new FormData()
    fbData.append('Name', data.Name)
    fbData.append('Email', data.EmailId)
    fbData.append('Mobile', data.MobileNo)
    fbData.append('Inst_Id', instData);
    this.send_mail(fbData)
  }

  send_mail(data: any) {
    this._crud.GetACallBack(data).subscribe(
      (res: any) => {
        console.log(res);
        if (res == 'Success') {
          this._shared.tostSuccessTop('Callback request successful. We will contact you shortly.')
        }
      }
    )
  }
  mobileNo(data:any){
    console.log(data);
  }
}
