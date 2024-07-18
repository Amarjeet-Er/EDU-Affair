import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { App } from '@capacitor/app';
import { Platform } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class BackButtonService {

  private previousUrl: string = "";
  private currentUrl: string = "";

  constructor(
    private router: Router,
    private platform: Platform,
    private _router: Router
  ) {
    this.currentUrl = this.router.url;
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.previousUrl = this.currentUrl;
        this.currentUrl = event.url;
      };
    });
  }

  back(url: any) {
    this.platform.ready().then(() => {
      App.addListener('backButton', () => {
        if (this.router.url != "/") {
          window.location.replace(this.previousUrl)
          window.location.href = this.previousUrl;
          // alert(this.previousUrl) 
        }
        if (this.router.url == "/") {
          this.showExitConfirmation()

        }


        // for home page back 
        let urlObject = new URL(window.location.href);
        let pathname = urlObject.pathname;
        let trimmedPathname = pathname.startsWith('/') ? pathname.substr(1) : pathname;
        if (trimmedPathname == "home") {
          this.showExitConfirmation()
        }

        // for after exam 
        // if (trimmedPathname == "mcqList") {
        //   this.showExitConfirmationmcq()
        // }

        if (trimmedPathname == "videos") {
          this.router.navigate(['/home/subject/unit'])
        }

      })
    })
  }




  showExitConfirmation() {
    const confirmed = window.confirm('Do you want to close the app?');
    if (confirmed) {
      // User confirmed, exit the app
      App.exitApp();
    }
  }

  showExitConfirmationmcq() {
    const confirmed = window.confirm(`Once you go back ,
     you will not able to review your qustion answers.
Are you sure you want to go back ?`);
    if (confirmed) {
      this.router.navigate(['/mcqSubject/mcqUnit'])
    } else {
      this.router.navigate(['/mcqList'])
    }
  }
}