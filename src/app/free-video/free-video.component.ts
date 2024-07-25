import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SharedService } from '../servies/shared.service';
import { CrudService } from '../servies/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-free-video',
  templateUrl: './free-video.component.html',
  styleUrls: ['./free-video.component.css']
})
export class FreeVideoComponent implements OnInit {
  unSafeurl: string = ''
  safeUrl: any
  video_data: any
  video_title: string = ''
  video_desc: string = ''
  fist_data: any
  login: any;
  login_data: any;
  img_url: any;

  constructor(
    private sanitizer: DomSanitizer,
    private _shared: SharedService,
    private _crud: CrudService,
    private _routing: Router

  ) {
    this.login = localStorage.getItem('loginData')
    this.login_data = JSON.parse(this.login)
    this.fist_data = this._routing.getCurrentNavigation()?.extras
  }

  ngOnInit() {
    this.get_videoList()

    this._shared.img_url.subscribe(
      (res: any) => {
        console.log(res);
        this.img_url = res
      }
    )
  }

  ngAfterViewInit() {
    this.play_video(this.fist_data.VideoUrl)
    this.video_title = this.fist_data.VideoTitle
    this.video_desc = this.fist_data.VideoDescription
  }

  get_videoList() {
    this._crud.get_free_Video(this.login_data.inst_id).subscribe(
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

}
