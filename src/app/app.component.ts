import { AfterViewInit, Component, OnInit } from '@angular/core';
import { BackButtonService } from './servies/back-button.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { App } from '@capacitor/app';
import { Browser } from '@capacitor/browser';
import { HttpClient } from '@angular/common/http';
import { LocalNotifications , ActionPerformed} from '@capacitor/local-notifications';
import { CrudService } from './servies/crud.service';
import { PrivacyScreen } from '@capacitor-community/privacy-screen';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit , AfterViewInit {
  AppCurrentVersion = 0.1
  title = 'EduA ffair';
  login: any
  login_data: any
  diviesDeatils: any
  appVersion: string = ''
  updateURL :  string = ''

  constructor(
    private _backbtn: BackButtonService,
    private _router: Router,
    private location: Location,
    private _http: HttpClient,
    private _crud: CrudService
  ) {
   
  }

  ngOnInit() {
    this._backbtn.back(this.location.path())
    this.isLogin()
    this.initializeApp();
    this.addNotificationActionListener()
  }

  ngAfterViewInit(): void {
    PrivacyScreen.enable().then(() => {
      console.log('Privacy enable');
    }).catch(error => {
      console.log('Error disabling privacy:', error);
    });
  }
  isLogin() {
    this.login = localStorage.getItem('loginData')
    this.login_data = JSON.parse(this.login)

    if (this.login_data) {
      if (this.location.path() == '') {
        this._router.navigate(['/home'])
      } else {

      }
    }
  }

  // for update code here  

  async initializeApp() {
    // this._crud.getAppNewUpdate().subscribe(
    //   (res: any) => {
    //     console.log(res,'app version');
    //     console.log(res[0].Current_Version);
    //     this.updateURL =  res[0].Url
    //     if (this.AppCurrentVersion != res[0].Current_Version) {
    //       this.pushNotification()
    //     }
    //   }
    // )
  }

  pushNotification() {
    LocalNotifications.schedule({
      notifications: [
        {
          title: 'New version available',
          body: 'Tap to update to the latest version',
          id: 1,
          extra: {
            url: `${this.updateURL}`,
          },
        },
      ]
    });
  }

   addNotificationActionListener = async () => {
    return LocalNotifications.addListener('localNotificationActionPerformed', (notificationAction: ActionPerformed) => {
      // Handle the notification action here
      console.log('Notification action performed:', notificationAction);
      window.open(this.updateURL)
    });
  };

  // initializeNotificationClickHandler() {
  //   App.addListener('localNotificationActionPerformed', (notification:any) => {
  //     const url = notification.notification?.extra?.url;
  //     if (url) {
  //       window.open(url, '_system'); 
  //     }
  //   });
  // }

}
