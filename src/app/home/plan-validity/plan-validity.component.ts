import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/servies/crud.service';

@Component({
  selector: 'app-plan-validity',
  templateUrl: './plan-validity.component.html',
  styleUrls: ['./plan-validity.component.css']
})
export class PlanValidityComponent implements OnInit {
  premium: any
  login: any
  login_data: any
  EndDate: string = ''
  Price: string = '0'
  start_date =  ''
  TimeDuration = 0
  userid = 0
  loginId:any;
  login_id:any;
  constructor(
    private _crud: CrudService,
    private _routing: Router
  ) {
    this.login = localStorage.getItem('userData')
    this.login_data = JSON.parse(this.login)
    console.log(this.login_data);
    this.userid =  this.login_data.Id

    this.loginId = localStorage.getItem('loginData')
    this.login_id = JSON.parse(this.loginId)
  }

  ngOnInit() {
    this._crud.get_validity(this.userid, this.login_id.inst_id).subscribe(
      (res: any) => {
        console.log(res, 'user id plan');
        this.premium = res[0]
        this.Price = res[0].Price
        this.TimeDuration = res[0].TimeDuration


        let startDate =  res[0].Date
        this.start_date =  startDate.substring(0, 10)

        let dateTimeString = res[0].EndDate;
        this.EndDate = dateTimeString.substring(0, 10)

      }
    )
  }


}
