import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/servies/crud.service';
import { SharedService } from 'src/app/servies/shared.service';
import { Device } from '@capacitor/device';

@Component({
  selector: 'app-video-play',
  templateUrl: './video-play.component.html',
  styleUrls: ['./video-play.component.css']
})
export class VideoPlayComponent implements OnInit {
  unSafeurl: string = ''
  safeUrl: any
  video_data: any
  video_title: string = ''
  video_desc: string = ''
  unit: string = ''
  unit_data: any
  unit_id: number = 0
  login: any
  login_data: any
  SubscriptionStatus: any
  loginId: any;
  login_id: any
  img_url: any;

  constructor(
    private sanitizer: DomSanitizer,
    private _shared: SharedService,
    private _crud: CrudService,
    private _router: Router

  ) {
    this.loginId = localStorage.getItem('loginData')
    this.login_id = JSON.parse(this.loginId)

    this.login = localStorage.getItem('userData')
    this.login_data = JSON.parse(this.login)
    this.SubscriptionStatus = this.login_data.SubscriptionStatus
  }

  ngOnInit(): void {

    this._shared.img_url.subscribe(
      (res: any) => {
        this.img_url = res
      }
    )
    
    this.unit_data = localStorage.getItem('unitid')
    console.log("unitloca" + JSON.parse(this.unit_data));
    this.unit_id = JSON.parse(this.unit_data)
    this.get_videoList(this.unit_id)
  }

  get_videoList(id: number) {
    this._crud.get_videos(this.login_id.inst_id, id).subscribe(
      (res: any) => {
        this.video_data = res
        this.play_video(res[0].VideoUrl)
        this.video_title = res[0].VideoTitle
        this.video_desc = res[0].VideoDescription
        this.unit = res[0].Unit
      }
    )
  }

  onPlay(data: any) {
    this.getValidity(this.login_data.Id, data)
  }

  play_video(url: any) {
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url)
  }

  getValidity(id: any, data: any) {
    this._crud.getValidity(id, this.login_id.inst_id).subscribe(
      (res: any) => {
        if (res.SubscriptionStatus == 1) {
          this.logDeviceInfo(id, data)
        } else {
          this._router.navigate(['/proLock2'])
        }
      }
    )
  }

  async logDeviceInfo(id: any, data: any) {
    try {
      const deviesId = await Device.getId();
      const info = await Device.getInfo();
      // this.updateDeviesId(deviesId.identifier, info.model)
      if (deviesId.identifier !== this.login_data.DeviceId) {
        this.video_title = data.VideoTitle
        this.video_desc = data.VideoDescription
        const url = data.VideoUrl
        this.unSafeurl = url
        this.play_video(url)
      } else {
        this._shared.tostErrorTop(`You can watch paid videos only on registered devices. Please check your device's ID in your profile and contact us.`)
      }
    } catch (error) {
      console.error('Unable to get device information:', error);
    }
  }
}