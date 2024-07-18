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
  constructor(
    private _crud: CrudService,
    private _shared: SharedService
  ) {
    this.login = localStorage.getItem('userData')
    this.login_data = JSON.parse(this.login)
  }
  RequstCall() {
    const data = this.login_data
    const fbData = new FormData()
    fbData.append('Name', data.Name)
    fbData.append('Email', data.EmailId)
    fbData.append('Mobile', data.MobileNo)
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

}
