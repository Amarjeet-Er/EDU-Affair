import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/servies/crud.service';
import { SharedService } from 'src/app/servies/shared.service';

@Component({
  selector: 'app-verify-with-mob',
  templateUrl: './verify-with-mob.component.html',
  styleUrls: ['./verify-with-mob.component.css']
})
export class VerifyWithMobComponent {
  otpForm !:  FormGroup
  num: string= ''
  backup: number = 0
  constructor(
    private _crud: CrudService,
    private _routing: Router,
    private _shared: SharedService,
    private  _fb :  FormBuilder
  ) { }


  ngOnInit(): void {
    this.otpForm  =  this._fb.group(
        {
          inp1:['',
           Validators.required,
        ],
          inp2:['',
           Validators.required,
        ],
          inp3:['',
           Validators.required,
        ],
          inp4:['',
           Validators.required,
        ],
          inp5:['',
           Validators.required,
        ],
          inp6:['',
           Validators.required,
        ],
        }
    )

    this._shared.mobile.subscribe(
      (res: any) => {
        this.num = res
      }
    )

    this.startBackup()
  }



  startBackup() {
    let counter = 60;
    this.updateCounter(counter);
    const intervalId = setInterval(() => {
      counter--;
      if (counter <= 0) {
        clearInterval(intervalId);
      } else {
        this.updateCounter(counter);
      }
    }, 1000);
  }

  updateCounter(value: any) {
    this.backup = value
  }


  ngOnDestroy() {
    this.updateCounter(0)
  }

  verify() {
    const data = this.otpForm.value
    console.log(data);
    
    const isotp =  Object.values(data).join("")
    console.log(isotp);
  
    this._shared.email.next(this.num)
    this._routing.navigate(['/signupwithmobile'])
  }
}
