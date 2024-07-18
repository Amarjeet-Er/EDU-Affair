import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from '../servies/shared.service';
import { CrudService } from '../servies/crud.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  regForm !: FormGroup
  courses : any
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

  countryList = ['India', 'Australia', 'Nepal', 'Bangladesh']


  collages = [

    {
      state: "Uttarakhand",
      collage: "Gautam Buddha Chikitsa Mahavidyalaya, Dehradum"
    },

    {
      state: "Uttar Pradesh",
      collage: "Autonomous State Medical College Pratapgarh"
    },

    {
      state: "Uttar Pradesh",
      collage: "Autonomous State Medical College, Siddharthnagar"
    },
    {
      state: "Uttar Pradesh",
      collage: "SKS Hospital Medical College & Research Centre"
    },
    {
      state: "Uttar Pradesh",
      collage: "Uma Nath Singh Autonomous State Medical College Society Jaunpur"
    },

    {
      state: "Bihar",
      collage: "All India Institute of Medical Sciences, Patna"
    },

  ]

  @ViewChild('input') input!: ElementRef<HTMLInputElement>;
  myControl = new FormControl('');
  filteredOptions: any;
  filterByState: any
  Institutes: any;
  constructor(
    private fb: FormBuilder,
    private _shared: SharedService,
    private _crud: CrudService ,
    private _router: Router
  ) {
    this.filteredOptions = this.collages;

  }

  filter(): void {
    const filterValue = this.input.nativeElement.value.toLowerCase();
    console.log(filterValue);

    this.filteredOptions = this.filterByState.filter((o: any) => o.collage.toLowerCase().includes(filterValue));
  }


  ngOnInit() {
    this.regForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      course: ['', Validators.required],
      country: ['', Validators.required],
      state: ['', Validators.required],
      college: ['', Validators.required],
      contactno: ['', Validators.required],
      profile :[],
      password: [
        '', [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(30),
          Validators.pattern(/[A-Z]/),
          Validators.pattern(/[a-z]/),
          Validators.pattern(/[0-9]/),
          Validators.pattern(/[!@#$]/),
        ]
      ],

    })

    this._shared.send_otp_number.subscribe(
      (res: any) => {
        console.log(res);
        this.regForm.controls['contactno'].setValue(res)

      }
    )

    this.get_user()
    this.get_Institute()

  }



  getCollage(data: any) {
    console.log(data);
    this.filterByState = this.collages.filter(res => (res.state === data))
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
    this._crud.get_select_course(inst_id).subscribe(
      (res: any) => {
        this.courses = res;
      }
    )
  }
  onSubmit() {
    const fromdata = new FormData()
    fromdata.append('Name', this.regForm.get('name')?.value),
      fromdata.append('Emailid', this.regForm.get('email')?.value),
      fromdata.append('MobileNo', this.regForm.get('contactno')?.value),
      fromdata.append('Inst_id', this.regForm.get('Inst_id')?.value),
      fromdata.append('Course', this.regForm.get('course')?.value),
      fromdata.append('CountryName', this.regForm.get('country')?.value),
      fromdata.append('State', this.regForm.get('state')?.value),
      fromdata.append('College', this.regForm.get('college')?.value),
      fromdata.append('Password', this.regForm.get('password')?.value),

      console.log(this.regForm.value);
    this._crud.reg_post(fromdata).subscribe(
      (res: any) => {
        console.log(res);
        if (res === 'Success') {
          alert('Registation Successfully ')
           this._router.navigate(['/'])
        }

      }
    )
  }

  get_user() {
    this._crud.get_user().subscribe(
      (res: any) => {
        console.log(res);

      }
    )
  }




}
