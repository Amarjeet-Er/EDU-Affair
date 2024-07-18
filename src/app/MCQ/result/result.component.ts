import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

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
constructor(
  @Inject(MAT_DIALOG_DATA) public dialogData : any
){
  
}

  ngOnInit() {
   console.log(this.dialogData);
   this.total_qty =  this.dialogData.total_qty
   this.correct =  this.dialogData.correct_ans
   this.totalMark =  this.dialogData.totalMarks
   this.score = Math.round(this.dialogData.percentage)
  }




}
