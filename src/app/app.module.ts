import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { SignupComponent } from './signup/signup.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewportComponent } from './viewport/viewport.component';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { CoursesComponent } from './home/courses/courses.component';
import { SubjectComponent } from './home/subject/subject.component';
import { PremiumComponent } from './home/premium/premium.component';
import { VideoslistComponent } from './home/videoslist/videoslist.component';
import { ProfileComponent } from './home/profile/profile.component';
import { VideoPlayComponent } from './home/video-play/video-play.component';
import { PremiumDescriptionComponent } from './home/premium-description/premium-description.component';
import { PaymentGetWayComponent } from './home/payment-get-way/payment-get-way.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './home/about/about.component';
import { TermandconComponent } from './home/termandcon/termandcon.component';
import { ContactusComponent } from './home/contactus/contactus.component';

import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from "ngx-ui-loader";
import { CountryComponent } from './signup/country/country.component';
import { VerifyWithEmailComponent } from './signup/verify-with-email/verify-with-email.component';
import { RegWithEmailComponent } from './signup/reg-with-email/reg-with-email.component';
import { SignupWithEmailComponent } from './signup/signup-with-email/signup-with-email.component';
import { SignupWithMobileComponent } from './signup/signup-with-mobile/signup-with-mobile.component';

import { SwiperModule } from 'swiper/angular';
import { UnitComponent } from './home/unit/unit.component';
import { QBankListComponent } from './qBank/q-bank-list/q-bank-list.component';
import { QBankOpenComponent } from './qBank/q-bank-open/q-bank-open.component';
import { QBsubjectListComponent } from './qBank/qbsubject-list/qbsubject-list.component';
import { QBunitListComponent } from './qBank/qbunit-list/qbunit-list.component';
import { PremiumSubjectComponent } from './home/premium-subject/premium-subject.component';
import { McqSubjectListComponent } from './MCQ/mcq-subject-list/mcq-subject-list.component';
import { McqUnitComponent } from './MCQ/mcq-unit/mcq-unit.component';
import { McqListComponent } from './MCQ/mcq-list/mcq-list.component';
import {MatRadioModule} from '@angular/material/radio';
import { ResultComponent } from './MCQ/result/result.component';
import {MatDialogModule} from '@angular/material/dialog';
import { VerifyWithMobComponent } from './signup/verify-with-mob/verify-with-mob.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ProLockComponent } from './pro-lock/pro-lock.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { SettingComponent } from './setting/setting/setting.component';
import { AppThemComponent } from './setting/app-them/app-them.component';
import { ChnagePasswordComponent } from './setting/chnage-password/chnage-password.component';
import { FreeVideoComponent } from './free-video/free-video.component';
import { SuggestVideoComponent } from './suggest-video/suggest-video.component';
import { PaymentGetwayComponent } from './home/Payemt/payment-getway/payment-getway.component';
import { PlanValidityComponent } from './home/plan-validity/plan-validity.component';
import { ProLock2Component } from './home/pro-lock2/pro-lock2.component';
import { ProLock3Component } from './home/pro-lock3/pro-lock3.component';
import { RequstCallComponent } from './home/requst-call/requst-call.component';
import { ReviewComponent } from './MCQ/review/review.component';
import { IntroducatioComponent } from './MCQ/introducatio/introducatio.component';
import { GetDeviesInfoComponent } from './home/get-devies-info/get-devies-info.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { SendSMSComponent } from './signup/send-sms/send-sms.component';
import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider
} from '@abacritt/angularx-social-login';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomePageComponent,
    DashboardComponent,
    SignupComponent,
    ViewportComponent,
    CoursesComponent,
    SubjectComponent,
    PremiumComponent,
    VideoslistComponent,
    ProfileComponent,
    VideoPlayComponent,
    PremiumDescriptionComponent,
    PaymentGetWayComponent,
    AboutComponent,
    TermandconComponent,
    ContactusComponent,
    CountryComponent,
    VerifyWithEmailComponent,
    RegWithEmailComponent,
    SignupWithEmailComponent,
    SignupWithMobileComponent,
    UnitComponent,
    QBankListComponent,
    QBankOpenComponent,
    QBsubjectListComponent,
    QBunitListComponent,
    PremiumSubjectComponent,
    McqSubjectListComponent,
    McqUnitComponent,
    McqListComponent,
    ResultComponent,
    VerifyWithMobComponent,
    ProLockComponent,
    ForgetPasswordComponent,
    SettingComponent,
    AppThemComponent,
    ChnagePasswordComponent,
    FreeVideoComponent,
    SuggestVideoComponent,
    PaymentGetwayComponent,
    PlanValidityComponent,
    ProLock2Component,
    ProLock3Component,
    RequstCallComponent,
    ReviewComponent,
    IntroducatioComponent,
    GetDeviesInfoComponent,
    SendSMSComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatSelectModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule,
    HttpClientModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({ }),
    SwiperModule,
    MatRadioModule,
    MatDialogModule,
    MatSnackBarModule,
    MatCheckboxModule,
    SocialLoginModule ,
    
    

  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              'clientId'
            )
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('clientId')
          }
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }
  ], 
  bootstrap: [AppComponent]
})
export class AppModule { }
