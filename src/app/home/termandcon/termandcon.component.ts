import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/servies/crud.service';

@Component({
  selector: 'app-termandcon',
  templateUrl: './termandcon.component.html',
  styleUrls: ['./termandcon.component.css']
})
export class TermandconComponent implements OnInit {
  termsAndConditons: any;
  login: any;
  login_data: any;
  constructor(
    private _curd: CrudService
  ) {
    this.login = localStorage.getItem('loginData')
    this.login_data = JSON.parse(this.login)
   }
  ngOnInit(): void {
    this._curd.get_terms_condition(this.login_data.inst_id).subscribe(
      (data: any) => {
        this.termsAndConditons = data.Data;
        console.log(this.termsAndConditons, 'teh');
      });
  }

}
