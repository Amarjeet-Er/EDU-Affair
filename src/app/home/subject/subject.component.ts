import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/servies/crud.service';
import { SharedService } from 'src/app/servies/shared.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
  subject_data :any
  login:any;
  login_data: any;
  constructor(
    private _crud: CrudService,
    private _shared: SharedService,
    private _router: Router
  ) {
    this.login = localStorage.getItem('loginData')
    this.login_data = JSON.parse(this.login)
   }

  ngOnInit(): void {
    this._shared.course_id.subscribe(
      (res: any) => {
        console.log(res);
        this.get_subject(res)
      }
    )


  }

  get_subject(id: number) {
    this._crud.get_subject(id, this.login_data.inst_id).subscribe(
      (res: any) => {
        console.log(res);
         this.subject_data =  res
      }
    )
  }


  OnUnit(id:number){
    this._shared.subject_id.next(id)
    localStorage.setItem('subjectid', JSON.stringify(id) )
    this._router.navigate(['/home/subject/unit'])
  }

}
