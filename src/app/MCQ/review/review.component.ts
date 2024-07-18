import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CrudService } from 'src/app/servies/crud.service';
import { ResultComponent } from '../result/result.component';
import { SharedService } from 'src/app/servies/shared.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  user_data: any
  mcq_data: any
  one_mcq_data: any
  qustion_no: number = 0
  result_data = 0
  student_name: string = ''
  login: any
  login_data: any
  userid: any
  constructor(
    private _crud: CrudService,
  ) {

    this.login = localStorage.getItem('loginData')
    this.login_data = JSON.parse(this.login)
    this.userid = this.login_data.id
  }

  ngOnInit() {

    this.get_review()

  }

  get_review() {
    this._crud.get_review_mcq(this.login_data.inst_id, this.userid).subscribe(
      (res: any) => {
        console.log(res);
        this.mcq_data = res
        this.qustionChange(this.mcq_data)
      }
    )
  }


  qustionChange(mcq_data: any) {
    this.one_mcq_data = mcq_data[this.qustion_no]
    console.log(this.one_mcq_data);
  }



  OnNext() {
    this.qustion_no = this.qustion_no + 1
    this.qustionChange(this.mcq_data)

    // var options = document.querySelectorAll('.opction');
    // options.forEach(function (opt) {
    //   opt.classList.remove('correct', 'incorrect');
    // });
  }



}
