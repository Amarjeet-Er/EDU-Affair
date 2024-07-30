import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/servies/crud.service';
import { SharedService } from 'src/app/servies/shared.service';
import { Device } from '@capacitor/device';
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
SwiperCore.use([Autoplay, Pagination, Navigation]);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  imageUrl: string = 'https://eduaffair.in/'
  video_data: any
  slider_data: any
  subject_data: any
  free_video_data: any
  planA: boolean = false
  planB: boolean = false
  Suggestionvideo: any
  suggestMCQ_sub: string = ''
  suggestMCQ_title: string = ''
  login: any
  login_data: any
  user: any
  user_data: any
  suggestedTest: any;
  img_url: any;

  constructor(
    private _crud: CrudService,
    private _shared: SharedService,
    private _routing: Router
  ) {
    this.login = localStorage.getItem('loginData')
    this.login_data = JSON.parse(this.login)

    this.user = localStorage.getItem('userData')
    this.user_data = JSON.parse(this.user)
  }

  ngOnInit(): void {

    this._shared.img_url.subscribe(
      (res: any) => {
        this.img_url = res
      }
    )

    this._crud.get_banner(this.login_data.inst_id).subscribe(
      (res: any) => {
        this.slider_data = res
      }
    )

    this._shared.course_id.subscribe(
      (res: any) => {
        const coursedata = res
        this.getSuggestionvideo(res, this.login_data.inst_id)
        this.get_maix_MCQ(res)
        this._crud.get_subject(coursedata, this.login_data.inst_id).subscribe(
          (res: any) => {
            this.subject_data = res[0]?.SubjectName
          }
        )
      }
    )
    this.get_free_video()
  }

  get_free_video() {
    this._crud.get_free_Video(this.login_data.inst_id).subscribe(
      (res: any) => {
        this.free_video_data = res.filter((free_video: any) => free_video.VideoType === "Unpaid");
      }
    )
  }

  get_plan() {
    this._shared.PlanA.subscribe(
      (res: any) => {
        this.planA = res
      }
    )
    this._shared.PlanB.subscribe(
      (res: any) => {
        this.planB = res
      }
    )
  }

  onSubject() {
    if (this.planA === true) {
      this._routing.navigate(['/home/subject'])
    } else {
      this._routing.navigate(['/proLock',])
      this._shared.privous_url.next(this._routing.url)
    }
  }

  OnFreeVideo(data: object) {
    this._shared.freevidoePlay.next(data)
    this._routing.navigate(['freevideo'], data)

  }

  getSuggestionvideo(courseid: number, instId: number) {
    const data = {
      Course: courseid,
      Inst_Id: instId,
    }

    this._crud.get_Suggestionvideo(data).subscribe(
      (res: any) => {
        this.Suggestionvideo = res.filter((video: any) => video.VideoType === "Paid");
      }
    )
  }

  onSuggesg(data: object) {
    this.getValiditys(this.login_data.id, data)
  }

  getValiditys(id: any, data: any) {
    this._crud.getValidity(id, this.login_data.inst_id).subscribe(
      (res: any) => {
        if (res.SubscriptionStatus == 1) {
          this.logDeviceInfos(id, data)
        } else {
          this._routing.navigate(['/proLock'])
          this._shared.videoyatest.next('Video')
        }
      }
    )
  }

  onMCQ(suggestedTest: any) {
    if (suggestedTest == 0) {
      return
    }
    else {
      this.getValidity(this.login_data.id)
    }
  }

  getValidity(id: any) {
    this._crud.getValidity(id, this.login_data.inst_id).subscribe(
      (res: any) => {
        if (res.SubscriptionStatus == 1) {
          this.logDeviceInfo(id)
        } else {
          this._routing.navigate(['/proLock'])
          this._shared.videoyatest.next('MCQ Test')
        }
      }
    )
  }

  async logDeviceInfo(id: any) {
    try {
      const deviesId = await Device.getId();
      const info = await Device.getInfo();
      // this.updateDeviesId(deviesId.identifier, info.model)
      if (deviesId.identifier == this.user_data.DeviceId) {
        this._shared.mcqType.next('suggess')
        this._routing.navigate(['/mcqList'])
      } else {
        this._shared.tostErrorTop(`You can access pro content only on registered devices. Please check your device's ID in your profile and contact us. `)
      }
    } catch (error) {
    }
  }

  async logDeviceInfos(id: any, data: any) {
    try {
      const deviesId = await Device.getId();
      const info = await Device.getInfo();
      // this.updateDeviesId(deviesId.identifier, info.model)
      if (deviesId.identifier == this.user_data.DeviceId) {
        this._routing.navigate(['/suggestvideo'], data)
      } else {
        this._shared.tostErrorTop(`You can watch paid videos only on registered devices. Please check your device's ID in your profile and contact us.`)
      }
    } catch (error) {
    }
  }

  get_maix_MCQ(id: any) {
    this._crud.get_suggess_mcq(this.login_data.inst_id, id).subscribe(
      (res: any) => {
        this.suggestedTest = res
        this.suggestMCQ_sub = res[0]?.Subject
        this.suggestMCQ_title = res[0]?.MCQTitle
      }
    )
  }
}