import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/servies/crud.service';
import { SharedService } from 'src/app/servies/shared.service';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css']
})
export class UnitComponent implements OnInit {
  course_id: number = 0
  user_data: any
  subject: any
  subject_id: number = 0
  unit_data: any
  login: any;
  login_data: any;
  inst_id: any;
  constructor(
    private _crud: CrudService,
    private _shared: SharedService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.login = localStorage.getItem('loginData')
    this.login_data = JSON.parse(this.login)
    this.inst_id = this.login_data.inst_id

    this.user_data = localStorage.getItem('userData')
    const data = JSON.parse(this.user_data)
    this.course_id = data.Course

    this.subject = localStorage.getItem('subjectid')
    this.subject_id = JSON.parse(this.subject)

    this.gte_unit(this.course_id, this.subject_id, this.inst_id)
  }


  gte_unit(course_id: number, subject_id: number, inst_id: number) {

    const data = {
      "Course": course_id,
      "Subject": subject_id,
      "Inst_Id": inst_id,
    }
    console.log(data);
    
    this._crud.get_unit(data).subscribe(
      (res: any) => {
        console.log(res, 'unit');
        this.unit_data = res
      }
    )
  }


  OnVideos(id: any) {
    console.log(id);
    localStorage.setItem('unitid', JSON.stringify(id))
    this._router.navigate(['/home/subject/unit/videos'])
  }
}
