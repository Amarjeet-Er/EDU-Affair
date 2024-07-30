import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudService } from '../servies/crud.service';
import { Router } from '@angular/router';
import { SharedService } from '../servies/shared.service';
import { SocialAuthService } from "@abacritt/angularx-social-login";
import { FacebookLoginProvider } from "@abacritt/angularx-social-login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  loginForm !: FormGroup
  data: any
  constructor(
    private _crud: CrudService,
    private fb: FormBuilder,
    private _routing: Router,
    private _shared: SharedService,
    private authService: SocialAuthService
  ) {
  }

  ngOnInit(): void {
    this.is_login()
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onSubmit() {
    console.log(this.loginForm.value);

    if (!this.loginForm.valid) {
      this._shared.tostErrorBottom('Please fill all required fields.')
    } else {
      const fromdadata = new FormData()
      fromdadata.append('EmailId', this.loginForm.get('username')?.value),
        fromdadata.append('Password', this.loginForm.get('password')?.value),

        this._crud.login(fromdadata).subscribe(
          (res: any) => {
            console.log(res);
            if (res.UserId > 0) {
              console.log(res);

              const data = {
                id: res.UserId,
                name: res.Name,
                status: res.Status,
                profile: res.Profile,
                inst_id: res.Inst_id,
                MobileNo: res.MobileNo,
                EmailId: res.Emailid,
                companyName: res.companyName,
                companyProfile: res.companyProfile,
              }

              this._shared.tostSuccessBottom('Login Successfully...  ')
              localStorage.setItem('loginData', JSON.stringify(data))
              this._routing.navigate(['/home'])
            } else {
              this._shared.tostErrorBottom('Username or password is incorrect.')
            }
          }, (error) => {
            this._shared.tostErrorBottom('Username or password is incorrect.')
            console.log('Error', error);
          }
        )
    }
  }


  is_login() {
    this.data = localStorage.getItem('loginData')
    const logindata = JSON.parse(this.data)
    console.log(logindata);
  }


  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }

}
