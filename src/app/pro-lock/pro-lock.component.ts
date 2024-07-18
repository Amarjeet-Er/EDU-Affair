import { Component } from '@angular/core';
import { SharedService } from '../servies/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pro-lock',
  templateUrl: './pro-lock.component.html',
  styleUrls: ['./pro-lock.component.css']
})
export class ProLockComponent {
  videoyatest :  string = 'video'
  constructor(
    private _shared: SharedService,
    private _router: Router
  ) {
    this._router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    }

    this._shared.videoyatest.subscribe(
      (res:any)=>{
        this.videoyatest =  res
      }
    )
  }


  back() {
    this._shared.privous_url.subscribe(
      (res: any) => {
        console.log(res);
        this._router.navigate([res])
      }
    )
  }
}
