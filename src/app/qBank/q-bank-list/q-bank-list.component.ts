import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/servies/crud.service';
import { SharedService } from 'src/app/servies/shared.service';

@Component({
  selector: 'app-q-bank-list',
  templateUrl: './q-bank-list.component.html',
  styleUrls: ['./q-bank-list.component.css']
})
export class QBankListComponent implements OnInit {
  course_id: number = 0
  subject_id: number = 0
  unit_id: number = 0
  QbankData: any
  login_data: any;
  login: any;

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
        this.course_id = res
      }
    )

    this._shared.subject_id.subscribe(
      (res: any) => {
        console.log(res);
        this.subject_id = res
      }
    )

    this._shared.unit_id.subscribe(
      (res: any) => {
        console.log(res);
        this.getQbank(this.course_id, this.subject_id , res, this.login_data.inst_id)
      }
    )
  }


  getQbank(course_id: number, subject_id: number , unit_id: number, InstId:number) {

    const data = {
        "CourseId": course_id,
        "SubjectId":subject_id,
        "UnitId":unit_id,
        "Inst_Id":InstId,
    }

    this._crud.get_QBlist(data).subscribe(
      (res: any) => {
        console.log(res);
        this.QbankData = res
      }
    )
  }


  OnPdfOpen(urlname: any) {
    console.log(urlname);
    const url =  urlname.slice(18)
    console.log(url);
    this._shared.pdf_file_name.next(url)
    this._router.navigate(['/qBankOpen'])
  }

  


}
