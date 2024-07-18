import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/servies/crud.service';
import { SharedService } from 'src/app/servies/shared.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent {

  constructor(
    private  _routing :  Router,
    private  _crud :  CrudService,
    private _shared : SharedService
  ){

  }

  onLogout(){
    this._routing.navigate(['/'])
    localStorage.removeItem('loginData');
  }
}
