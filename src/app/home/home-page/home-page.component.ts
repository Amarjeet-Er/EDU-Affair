import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackButtonService } from 'src/app/servies/back-button.service';
import { CrudService } from 'src/app/servies/crud.service';
import { SharedService } from 'src/app/servies/shared.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  isLogin: boolean = false
  login: any
  login_data: any
  img_url: string = ''
  user_data: any
  profile: string = ''
  name: string = '...'
  SubscriptionStatus: any = 0
  constructor(
    private _crud: CrudService,
    private _routing: Router,
    private _shared: SharedService,
    private _bacBtn: BackButtonService
  ) {
    this.login = localStorage.getItem('loginData')
    this.login_data = JSON.parse(this.login)
    console.log(this.login_data.id);
    var logStatus = 0
    logStatus = this.login_data.id
    if(logStatus > 0){
    }else{
      this._routing.navigate(['/'])
    }
    this._shared.img_url.subscribe(
      (res: any) => {
        this.img_url = res

      }
    )
  }

  onLeadSubMenu: boolean = true
  ImgUrl: string = ''
  LeadSubMenu() { }



  ngOnInit() {
    this._crud.get_profile(this.login_data.id, this.login_data.inst_id).subscribe(
      (res: any) => {
        this.user_data = res
        localStorage.setItem('userData', JSON.stringify(res))
        this.profile = res.Profile
        this.name = res.Name
        this._shared.course_id.next(res.Course)
        this._shared.student_data = res
        this.SubscriptionStatus = res.SubscriptionStatus

        // here code account block 

        if (res.LoginStatus == 1) {
          this._shared.tostDelay('Your account is blocked. Please contact the administrator.')
          this.logout()
        }
      }
    )
  }



  onProfile() {
    this._routing.navigate(['/profile'], this.user_data)
  }


  Plan() {
    if (this.SubscriptionStatus == 0) {
      this._routing.navigate(['/proLock'])
    } else {
      this._routing.navigate(['/PlanValidity'])

    }
  }




  logout() {
    this._routing.navigate(['/'])
    localStorage.removeItem('loginData')
    localStorage.removeItem('userData')
    localStorage.removeItem('subjectid')
    localStorage.removeItem('unitid')
  }
}
