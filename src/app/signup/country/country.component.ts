import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/servies/shared.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent {

  constructor(
    private _routing: Router,
    private _shared: SharedService
  ) {

  }

  onCountry(cu: any) {
    this._shared.country_name.next(cu)
    this._routing.navigate(['/regemail'], cu)
  }
}
