import { Component } from '@angular/core';
import { CrudService } from 'src/app/servies/crud.service';

@Component({
  selector: 'app-introducatio',
  templateUrl: './introducatio.component.html',
  styleUrls: ['./introducatio.component.css']
})
export class IntroducatioComponent {
  login: any
  login_data: any
  constructor(
    private _crud: CrudService
  ) {
    this.login = localStorage.getItem('loginData')
    this.login_data = JSON.parse(this.login)
  }

  onDelete() {
    console.log(this.login_data);

    this._crud.mcq_delele(this.login_data.inst_id, this.login_data.id).subscribe(
      (res: any) => {
        console.log(res);

      }
    )
  }
}
