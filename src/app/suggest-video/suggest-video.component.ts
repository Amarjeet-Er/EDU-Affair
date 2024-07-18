import { Component, OnInit, ElementRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SharedService } from '../servies/shared.service';
import { CrudService } from '../servies/crud.service';
import { Router } from '@angular/router';
import { Device } from '@capacitor/device';

@Component({
  selector: 'app-suggest-video',
  templateUrl: './suggest-video.component.html',
  styleUrls: ['./suggest-video.component.css']
})
export class SuggestVideoComponent implements OnInit {
  unSafeurl: string = ''
  safeUrl: any
  video_data: any
  video_title: string = ''
  video_desc: string = ''
  fist_data: any
  login: any
  login_data: any
  SubscriptionStatus: any
  user: any
  user_data: any
  loginId: any;
  login_id: any;
  constructor(
    private sanitizer: DomSanitizer,
    private _shared: SharedService,
    private _crud: CrudService,
    private _routing: Router,
    private elementRef: ElementRef
  ) {
    this.loginId = localStorage.getItem('loginData')
    this.login_id = JSON.parse(this.loginId)

    this.fist_data = this._routing.getCurrentNavigation()?.extras
  }

  ngOnInit() {
    this._shared.course_id.subscribe(
      (res: any) => {
        console.log(res);
        this.get_videoList(res, this.login_id.inst_id)

      }
    )
    this.login = localStorage.getItem('userData')
    this.login_data = JSON.parse(this.login)
    console.log(this.login_data);
    this.SubscriptionStatus = this.login_data.SubscriptionStatus

  }

  ngAfterViewInit() {
    console.log('onint');
    console.log(this.fist_data);
    this.play_video(this.fist_data.VideoUrl)
    this.video_title = this.fist_data.VideoTitle
    this.video_desc = this.fist_data.VideoDescription


  }



  get_videoList(course: number, instId:number) {
    const data = {
      Course: course,
      Inst_Id: instId,
    }
    this._crud.get_Suggestionvideo(data).subscribe(
      (res: any) => {
        console.log(res);
        this.video_data = res
      }
    )
  }


  onPlay(data: any) {
    this.video_title = data.VideoTitle
    this.video_desc = data.VideoDescription
    const url = data.VideoUrl
    console.log(url);
    this.unSafeurl = url
    this.play_video(url)
  }

  play_video(url: any) {
    console.log(url);
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url)
  }



  getValidity(id: any) {
    console.log(this.login_data);
    this._crud.getValidity(id, this.login_data.inst_id).subscribe(
      (res: any) => {
        console.log(res);
        if (res.SubscriptionStatus == 1) {
          this._shared.mcqType.next('suggess')
          this._routing.navigate(['/mcqList'])
        } else {
          this._routing.navigate(['/proLock'])
        }

      }
    )
  }

 


}
