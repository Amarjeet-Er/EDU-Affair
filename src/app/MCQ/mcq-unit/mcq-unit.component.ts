import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/servies/crud.service';
import { SharedService } from 'src/app/servies/shared.service';
import { Device } from '@capacitor/device';

@Component({
  selector: 'app-mcq-unit',
  templateUrl: './mcq-unit.component.html',
  styleUrls: ['./mcq-unit.component.css']
})
export class McqUnitComponent implements OnInit {
  course_id: number = 0
  subject_id: number = 0
  unit_data: any
  user_data: any
  subject: any
  login: any
  loginId: any;
  login_data: any;
  constructor(
    private _crud: CrudService,
    private _shared: SharedService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.loginId = localStorage.getItem('loginData')
    this.login_data = JSON.parse(this.loginId)

    this.user_data = localStorage.getItem('userData')
    this.login = JSON.parse(this.user_data)
    const data = JSON.parse(this.user_data)
    this.course_id = data.Course

    this.subject = localStorage.getItem('subjectid')
    this.subject_id = JSON.parse(this.subject)

    this.gte_unit(this.course_id, this.subject_id)
  }


  gte_unit(course_id: number, subject_id: number) {

    const data = {
      "Course": course_id,
      "Subject": subject_id
    }

    this._crud.get_unit(data).subscribe(
      (res: any) => {
        console.log(res);
        this.unit_data = res
      }
    )
  }

  OnUnit(id: any) {
    this.getValidityu(this.login.Id, id)

  }

  onMix() {

    this.getValidity(this.login.Id)
  }

  getValidityu(id: any, unitid: any) {
    this._crud.getValidity(id, this.login_data.inst_id).subscribe(
      (res: any) => {
        console.log(res.SubscriptionStatus);
        if (res.SubscriptionStatus == 1) {
          this.logDeviceInfos(unitid)


        } else {
          this._router.navigate(['/proLock3'])
        }

      }
    )
  }

  getValidity(id: any) {
    this._crud.getValidity(id, this.login_data.inst_id).subscribe(
      (res: any) => {
        console.log(res.SubscriptionStatus);
        if (res.SubscriptionStatus == 1) {
          this.logDeviceInfo()

        } else {
          this._router.navigate(['/proLock3'])
        }

      }
    )
  }

  async logDeviceInfo() {
    try {
      const deviesId = await Device.getId();
      const info = await Device.getInfo();
      // this.updateDeviesId(deviesId.identifier, info.model)
      if (deviesId.identifier !== this.login.DeviceId) {
        this._shared.mcqType.next('mix')
        this._router.navigate(['/mcqList'])

      } else {
        this._shared.tostErrorTop(`You can access pro content only on registered devices. Please check your device's ID in your profile and contact us.`)
      }
    } catch (error) {
      console.error('Unable to get device information:', error);
    }
  }

  async logDeviceInfos(unitid: any) {
    try {
      const deviesId = await Device.getId();
      const info = await Device.getInfo();
      // this.updateDeviesId(deviesId.identifier, info.model)
      if (deviesId.identifier !== this.login.DeviceId) {
        localStorage.setItem('unitid', JSON.stringify(unitid))
        this._shared.mcqType.next('unit')
        this._router.navigate(['/mcqList'])

      } else {
        this._shared.tostErrorTop(`You can access pro content only on registered devices. Please check your device's ID in your profile and contact us.`)
      }
    } catch (error) {
      console.error('Unable to get device information:', error);
    }
  }


}
