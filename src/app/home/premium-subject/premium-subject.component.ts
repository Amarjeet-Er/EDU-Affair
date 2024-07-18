import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/servies/crud.service';
import { SharedService } from 'src/app/servies/shared.service';

@Component({
  selector: 'app-premium-subject',
  templateUrl: './premium-subject.component.html',
  styleUrls: ['./premium-subject.component.css']
})
export class PremiumSubjectComponent implements OnInit {
  subject_data :any
  login_data:any
  login: any;
  login_id: any;
  constructor(
    private _crud: CrudService,
    private _shared: SharedService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.login = localStorage.getItem('loginData')
    this.login_id = JSON.parse(this.login)
    
    this.login_data =  localStorage.getItem('userData')
    const data =  JSON.parse(this.login_data)
    console.log(data.Course);
    this.get_subject(data.Course)
  }

  get_subject(id: number) {
    this._crud.get_subject(id, this.login_id.inst_id).subscribe(
      (res: any) => {
        console.log(res);
         this.subject_data =  res
      }
    )
  }


  OnUnit(id:number){
    this._shared.subject_id.next(id)
    localStorage.setItem('subjectid', JSON.stringify(id) )
    this._router.navigate(['/premium'])
  }

}
