import { Component, Inject, OnInit, AfterViewInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SharedService } from 'src/app/servies/shared.service';
import { PrivacyScreen } from '@capacitor-community/privacy-screen';
import { Share } from '@capacitor/share';
import { Filesystem, Directory } from '@capacitor/filesystem';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  total_qty = 0
  correct = 0
  score = 0
  totalMark = 0
  wrong = 0
  login: any;
  login_data: any;
  imgUrl: any
  user_data: any;
  user_name: any;
  constructor(
    private _shared: SharedService,
    @Inject(MAT_DIALOG_DATA) public dialogData: any
  ) {
    this._shared.img_url.subscribe(
      (data) => {
        console.log(data);

        this.imgUrl = data
      }
    )
    this.login = localStorage.getItem('loginData')
    this.login_data = JSON.parse(this.login)

    this.user_data = localStorage.getItem('userData')
    this.user_name = JSON.parse(this.user_data)
    console.log(this.user_name.Name, 'dsaadsjdsaj');

  }

  ngOnInit() {
    console.log(this.dialogData, 'score');
    this.total_qty = this.dialogData.total_qty
    this.correct = this.dialogData.correct_ans
    this.totalMark = this.dialogData.totalMarks
    this.wrong = this.dialogData.wrong
    this.score = Math.round(this.dialogData.percentage)
    console.log(this.totalMark, 'dsdsds');

  }

  ngAfterViewInit(): void {
    PrivacyScreen.disable().then(() => {
      console.log('Privacy enable');
    }).catch(error => {
      console.log('Error disabling privacy:', error);
    });
  }

  async shareResult() {
    // Hide the bottom section before taking the screenshot
    const bottomElement = document.querySelector('.bottom') as HTMLElement;
    if (bottomElement) {
      bottomElement.classList.add('hidden');
    }

    try {
      const canvas = await html2canvas(document.querySelector('.wrapper') as HTMLElement);
      const base64String = canvas.toDataURL('image/png');
      const blob = this.dataURItoBlob(base64String);
      const base64 = await this.blobToBase64(blob);
      const fileName = 'result-screenshot.png';
      await Filesystem.writeFile({
        path: fileName,
        data: base64,
        directory: Directory.External,
      });

      const fileUri = await Filesystem.getUri({
        path: fileName,
        directory: Directory.External
      });

      await Share.share({
        title: 'Check out my result!',
        text: 'Hey! I am using Edu Affair. I just completed a quiz and wanted to share my result with you. Check it out! You can download the app here: https://play.google.com/store/apps/details?id=com.eduaffair.app&pcampaignid=web_share',
        url: fileUri.uri,
      });
      this._shared.tostSuccessTop('Share was successfull.');
    } catch (error) {
      this._shared.tostErrorTop('Error capturing or sharing screenshot: ' + error);
    } finally {
      if (bottomElement) {
        bottomElement.classList.remove('hidden');
      }
    }
  }

  dataURItoBlob(dataURI: string): Blob {
    const byteString = atob(dataURI.split(',')[1]);
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: mimeString });
  }

  async blobToBase64(blob: Blob): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  }
}
