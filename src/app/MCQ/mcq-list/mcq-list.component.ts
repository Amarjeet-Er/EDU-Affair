import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CrudService } from 'src/app/servies/crud.service';
import { SharedService } from 'src/app/servies/shared.service';
import { ResultComponent } from '../result/result.component';
import { IntroducatioComponent } from '../introducatio/introducatio.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mcq-list',
  templateUrl: './mcq-list.component.html',
  styleUrls: ['./mcq-list.component.css']
})
export class McqListComponent implements OnInit {
  course_id: number = 0
  subject_id: number = 0
  unit_id: number = 0
  user_data: any
  subject: any
  unit: any
  mcq_data: any
  one_mcq_data: any
  qustion_no: number = 0
  isAnswered: boolean = false
  result_data = 0
  student_name: string = ''

  login: any
  login_data: any
  InstID: any;
  constructor(
    private _crud: CrudService,
    private _shared: SharedService,
    private _dilog: MatDialog,
    private _router: Router
  ) {

    this.login = localStorage.getItem('loginData')
    this.login_data = JSON.parse(this.login)
    this.InstID = this.login_data.inst_id
    this.call_intro()
  }

  ngOnInit() {
    this.user_data = localStorage.getItem('userData')
    const data = JSON.parse(this.user_data)
    this.course_id = data.Course

    this.subject = localStorage.getItem('subjectid')
    this.subject_id = JSON.parse(this.subject)

    this.unit = localStorage.getItem('unitid')
    this.unit_id = JSON.parse(this.unit)
    // this.get_videoList(this.unit_id)

    this._shared.mcqType.subscribe(
      (res: any) => {
        if (res == 'mix') {
          this.getMIx(this.subject_id, this.InstID)
        }
        else if (res == 'suggess') {
          this.get_maix_MCQ(this.course_id)
        }

        else {
          this.get_mac(this.course_id, this.subject_id, this.unit_id, this.InstID)
        }
      }
    )

  }

  get_maix_MCQ(id: any) {
    this._crud.get_suggess_mcq(this.login_data.inst_id, id).subscribe(
      (res: any) => {
        this.mcq_data = res
        this.qustionChange(this.qustion_no)
      }
    )
  }

  getMIx(sub: number, InstID: number) {
    const data = {
      Subject: sub,
      Inst_Id: InstID
    }
    this._crud.get_mix_mcq(data).subscribe(
      (res: any) => {
        this.mcq_data = res
        this.qustionChange(this.qustion_no)
      }
    )
  }

  get_mac(course_id: number, subject_id: number, unit_id: number, InstID: number) {
    const data =
    {
      "Course": course_id,
      "Subject": subject_id,
      "Unit": unit_id,
      "Inst_Id": InstID,
    }

    this._crud.get_mcq(data).subscribe(
      (res: any) => {
        this.mcq_data = res
        this.qustionChange(this.qustion_no)
      }
    )
  }

  qustionChange(num: number) {
    this.one_mcq_data = this.mcq_data[num]
  }

  OnNext() {
    this.isAnswered = false
    this.qustion_no = this.qustion_no + 1
    this.qustionChange(this.qustion_no)

    var options = document.querySelectorAll('.opction');
    options.forEach(function (opt) {
      opt.classList.remove('correct', 'incorrect');
    });
  }

  OnCheck(data: any, opction: any) {
    if (this.isAnswered === true) {
      return
    } else {
      this.marks_mcq(data)
      if (this.one_mcq_data.CorrectAns === data) {
        this.result_data = this.result_data + 1
        // console.log('total_qustion : ' + this.qustion_no);
        // console.log('correct answer : ' + this.result_data);

        opction.classList.add('correct');
        opction.classList.remove('incorrect');
      } else {
        opction.classList.add('incorrect');
        opction.classList.remove('correct');
      }
      this.isAnswered = true
    }
  }

  finalResult() {
    this.get_review()

  }
  review() {
    this._crud.get_review_mcq(this.login_data.inst_id, this.login_data.id).subscribe(
      (res: any) => {
        if (res.length > 0) {
          this._router.navigate(['/mcqreview'])
        }
      }
    )
  }


  marks_mcq(opt: string) {
    // console.log("userid" + this.login_data.id);
    // console.log("qustion id" + this.one_mcq_data.Id);

    // console.log("marks" + opt);

    const fromdata = new FormData()
    fromdata.append('userid', this.login_data.id)
    fromdata.append('QuestionId', this.one_mcq_data.Id)
    fromdata.append('Marks', opt)
    fromdata.append('Inst_Id', this.InstID)
    this._crud.marks_mcq(fromdata).subscribe(
      (res: any) => {
        console.log(res);
      }
    )
  }

  call_intro() {
    this._dilog.open(IntroducatioComponent, { disableClose: true })
  }


  get_review() {
    this._crud.get_review_mcq(this.login_data.inst_id, this.login_data.id).subscribe(
      (res: any) => {
        if (res.length > 0) {
          // this._shared.     
          const qno = this.qustion_no + 1
          let percentage = (this.result_data / qno) * 100
          const res_data = {
            total_qty: qno,
            correct_ans: this.result_data,
            percentage: percentage,
            totalMarks: res.length

          }
          this._dilog.open(ResultComponent, {
            width: '310px',
            maxWidth: '310px',
            height: 'auto',
            maxHeight: '80vh',
            panelClass: 'custom',
            data: res_data

          })
        }
      }
    )
  }
}
