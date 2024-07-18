import { Component, HostListener, Input } from '@angular/core';
import { Device } from '@capacitor/device';
import { SharedService } from 'src/app/servies/shared.service';

@Component({
  selector: 'app-get-devies-info',
  templateUrl: './get-devies-info.component.html',
  styleUrls: ['./get-devies-info.component.css']
})
export class GetDeviesInfoComponent {
  login: any
  login_data: any
  devies_id: any
  model_name: any
  copy_data: any

  constructor(
    private _shared: SharedService
  ) {
    this.logDeviceInfo()
  }

  copyToClipboard() {
const    text = `Your Devies ID ${this.devies_id} and Model Name ${this.model_name}`
    const input = document.createElement('textarea');
    input.style.position = 'fixed';
    input.style.opacity = '0';
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
    this._shared.tostSuccessBottom('copy success')
  }

  async logDeviceInfo() {
    try {
      const deviesId = await Device.getId();
      const info = await Device.getInfo();
      this.devies_id = deviesId.identifier
      this.model_name = info.model

    } catch (error) {
      console.error('Unable to get device information:', error);
    }
  }
}
