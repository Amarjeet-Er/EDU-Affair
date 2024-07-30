import { Component } from '@angular/core';
import { CrudService } from 'src/app/servies/crud.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  aboutUs: any;
  login: any;
  login_data: any;
  constructor(
    private _curd: CrudService
  ) {
    this.login = localStorage.getItem('loginData')
    this.login_data = JSON.parse(this.login)
   }
  ngOnInit(): void {
    this._curd.get_about(this.login_data.inst_id).subscribe(
      (data: any) => {
        this.aboutUs = data.Data;
        console.log(this.aboutUs, 'teh');
      });
  }

}
