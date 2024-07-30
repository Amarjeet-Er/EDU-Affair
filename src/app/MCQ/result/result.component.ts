import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SharedService } from 'src/app/servies/shared.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  total_qty = 0
  correct = 0
  score = 0
  totalMark = 0
  login: any;
  login_data: any;
  imgUrl:any
constructor(
  private _shared:SharedService,
  @Inject(MAT_DIALOG_DATA) public dialogData : any
){
  this._shared.img_url.subscribe(
    (data) => {
      console.log(data);
      
      this.imgUrl = data
      }
  )
  this.login = localStorage.getItem('loginData')
  this.login_data = JSON.parse(this.login)
  console.log(this.login_data.profile);
}

  ngOnInit() {
   console.log(this.dialogData);
   this.total_qty =  this.dialogData.total_qty
   this.correct =  this.dialogData.correct_ans
   this.totalMark =  this.dialogData.totalMarks
   this.score = Math.round(this.dialogData.percentage)
  }
}
