import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/servies/crud.service';
import { SharedService } from 'src/app/servies/shared.service';

@Component({
  selector: 'app-signup-with-mobile',
  templateUrl: './signup-with-mobile.component.html',
  styleUrls: ['./signup-with-mobile.component.css']
})
export class SignupWithMobileComponent {
  regForm !: FormGroup
  courses: any
  email_id: string = ''
  statesAndUTs = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
    "Kerala", "Maharashtra", "Madhya Pradesh", "Manipur", "Meghalaya", "Mizoram",
    "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Tripura",
    "Telangana", "Uttar Pradesh", "Uttarakhand", "West Bengal", "Andaman & Nicobar (UT)",
    "Chandigarh (UT)", "Dadra & Nagar Haveli and Daman & Diu (UT)",
    "Delhi [National Capital Territory (NCT)]", "Jammu & Kashmir (UT)", "Ladakh (UT)",
    "Lakshadweep (UT)", "Puducherry (UT)"
  ];

  statesAndUTsFilter: any
  collages: any
  @ViewChild('input') input!: ElementRef<HTMLInputElement>;
  myControl = new FormControl('');
  filteredOptions: any;
  filterByState: any
  Institutes: any;
  inst_id: any;

  constructor(
    private fb: FormBuilder,
    private _shared: SharedService,
    private _crud: CrudService,
    private _router: Router
  ) {
    this.filteredOptions = this.collages;
  }

  filterCalc(data: any): void {
    const state = this.regForm.get('State')?.value
    this._crud.getCallageByState(state, this.inst_id).subscribe(
      (res: any) => {
        console.log(res, 'sdsd');

        this.collages = res
        console.log(this.collages);
      }
    )

    const filterV = data.value.toLowerCase();
    console.log(filterV);
    this.filteredOptions = this.collages.filter((o: any) => o.CollegeName.toLowerCase().includes(filterV));
  }

  onSelect(data: any) {
    console.log(data.value);
    const filterV = data.value.toLowerCase();
    console.log(filterV);
    this.statesAndUTsFilter = this.statesAndUTs.filter((f: any) => f.toLowerCase().includes(filterV));
  }

  ngOnInit() {
    this.regForm = this.fb.group({
      Name: ['', Validators.required],
      Course: ['', Validators.required],
      State: ['', Validators.required],
      College: [''],
      MobileNo: ['', Validators.required],
      Inst_id: ['', Validators.required],
      profile: [],
      Password: [
        '', [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(30),
          Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*]).+$/)
        ]
      ],
    });

    this._shared.email.subscribe(
      (res: any) => {
        console.log(res);
        this.email_id = res

      }
    )
    this.get_Institute()
  }

  get_Institute() {
    this._crud.get_Institute().subscribe(
      (res: any) => {
        console.log(res);
        this.Institutes = res
      }
    )
  }
  get_inst_id_by_course(inst_id: string) {
    this.inst_id = inst_id
    this._crud.get_select_course(inst_id).subscribe(
      (res: any) => {
        this.courses = res;
      }
    )
  }

  onSubmit(collage: string) {
    console.log(this.regForm.value);

    if (!this.regForm.valid || collage == '') {
      this._shared.tostErrorTop('Plz. Fill all the filds..')
    } else {
      const fromdata = new FormData()
      fromdata.append('Name', this.regForm.get('Name')?.value),
        fromdata.append('EmailId', this.email_id),
        fromdata.append('MobileNo', this.regForm.get('MobileNo')?.value),
        fromdata.append('Course', this.regForm.get('Course')?.value),
        fromdata.append('Inst_id', this.regForm.get('Inst_id')?.value),
        fromdata.append('CountryName', 'India'),
        fromdata.append('State', this.regForm.get('State')?.value),
        fromdata.append('College', collage),
        fromdata.append('Password', this.regForm.get('Password')?.value),

        console.log(this.regForm.value);
      this._crud.reg_post(fromdata).subscribe(
        (res: any) => {
          console.log(res);
          if (res == 'Already Exist') {
            this._shared.tostErrorBottom('This  Mobile Already Exist..')
          }

          if (res == 'Success') {
            this._shared.tostSuccessBottom('Registation Successfully... ')
            this._router.navigate(['/'])
          }


        }
      )
    }

  }


}