import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/servies/crud.service';
import { SharedService } from 'src/app/servies/shared.service';

@Component({
  selector: 'app-mcq-subject-list',
  templateUrl: './mcq-subject-list.component.html',
  styleUrls: ['./mcq-subject-list.component.css']
})
export class McqSubjectListComponent implements OnInit {
  subject_data: any
  user_data: any
  course_id: number = 0
  login: any;
  login_data: any;
  constructor(
    private _crud: CrudService,
    private _shared: SharedService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.login = localStorage.getItem('loginData')
    this.login_data = JSON.parse(this.login)
    
    this.user_data = localStorage.getItem('userData')
    const data = JSON.parse(this.user_data)
    this.course_id = data.Course
    this.get_subject(this.course_id)
  }

  get_subject(id: number) {
    this._crud.get_subject(id, this.login_data.inst_id).subscribe(
      (res: any) => {
        this.subject_data = res
      }
    )
  }


  OnUnit(id: number) {
    localStorage.setItem('subjectid',JSON.stringify(id))
    this._router.navigate(['/mcqSubject/mcqUnit'])
  }
}
