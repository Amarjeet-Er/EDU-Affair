import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { SignupComponent } from './signup/signup.component';
import { ViewportComponent } from './viewport/viewport.component';
import { SubjectComponent } from './home/subject/subject.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { PremiumComponent } from './home/premium/premium.component';
import { VideoslistComponent } from './home/videoslist/videoslist.component';
import { VideoPlayComponent } from './home/video-play/video-play.component';
import { ProfileComponent } from './home/profile/profile.component';
import { PremiumDescriptionComponent } from './home/premium-description/premium-description.component';
import { PaymentGetWayComponent } from './home/payment-get-way/payment-get-way.component';
import { AboutComponent } from './home/about/about.component';
import { TermandconComponent } from './home/termandcon/termandcon.component';
import { ContactusComponent } from './home/contactus/contactus.component';
import { CountryComponent } from './signup/country/country.component';
import { RegWithEmailComponent } from './signup/reg-with-email/reg-with-email.component';
import { VerifyWithEmailComponent } from './signup/verify-with-email/verify-with-email.component';
import { SignupWithEmailComponent } from './signup/signup-with-email/signup-with-email.component';
import { SignupWithMobileComponent } from './signup/signup-with-mobile/signup-with-mobile.component';
import { UnitComponent } from './home/unit/unit.component';
import { QBankOpenComponent } from './qBank/q-bank-open/q-bank-open.component';
import { QBsubjectListComponent } from './qBank/qbsubject-list/qbsubject-list.component';
import { QBunitListComponent } from './qBank/qbunit-list/qbunit-list.component';
import { QBankListComponent } from './qBank/q-bank-list/q-bank-list.component';
import { PremiumSubjectComponent } from './home/premium-subject/premium-subject.component';
import { McqSubjectListComponent } from './MCQ/mcq-subject-list/mcq-subject-list.component';
import { McqUnitComponent } from './MCQ/mcq-unit/mcq-unit.component';
import { McqListComponent } from './MCQ/mcq-list/mcq-list.component';
import { VerifyWithMobComponent } from './signup/verify-with-mob/verify-with-mob.component';
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
import { ReviewComponent } from './MCQ/review/review.component';
import { GetDeviesInfoComponent } from './home/get-devies-info/get-devies-info.component';
import { SendSMSComponent } from './signup/send-sms/send-sms.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  // {path:'verify', component : VerifyWithMobileComponent},
  {
    path: 'home', component: HomePageComponent, children: [
      { path: '', component: DashboardComponent },
      {
        path: 'subject', component: ViewportComponent, children: [
          { path: '', component: SubjectComponent },
          {
            path: 'unit', component: ViewportComponent, children: [
              { path: '', component: UnitComponent },
              { path: 'videos', component: VideoslistComponent },

            ]
          },
        ]
      },

    ]
  },
  { path: 'premiumSbject', component: PremiumSubjectComponent },
  { path: 'premium', component: PremiumComponent },
  { path: 'premiumDesc', component: PremiumDescriptionComponent },
  { path: 'paymentgetway', component: PaymentGetWayComponent },
  { path: 'payment', component: PaymentGetwayComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'plyvideo', component: VideoPlayComponent },
  { path: 'about', component: AboutComponent },
  { path: 'term', component: TermandconComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'country', component: CountryComponent },
  { path: 'regemail', component: RegWithEmailComponent },
  { path: 'sendsms', component: SendSMSComponent },
  { path: 'vrifywithmobile', component: VerifyWithMobComponent },
  { path: 'vrifywithemail', component: VerifyWithEmailComponent },
  { path: 'signupwithemail', component: SignupWithEmailComponent },
  { path: 'signupwithmobile', component: SignupWithMobileComponent },

  { path: 'freevideo', component: FreeVideoComponent },
  { path: 'suggestvideo', component: SuggestVideoComponent },
  { path: 'getdevies', component: GetDeviesInfoComponent },

  { path: 'PlanValidity', component: PlanValidityComponent },

  //  for QBANK 
  { path: 'QBsubjectList', component: QBsubjectListComponent },
  { path: 'QBunitList', component: QBunitListComponent },
  { path: 'QBlist', component: QBankListComponent },
  { path: 'qBankOpen', component: QBankOpenComponent },

  // for MCQ 
  {
    path: 'mcqSubject', component: ViewportComponent, children: [
      { path: '', component: McqSubjectListComponent },
      { path: 'mcqUnit', component: McqUnitComponent },

    ]
  },
  { path: 'mcqList', component: McqListComponent },
  { path: 'mcqreview', component: ReviewComponent },

  { path: 'proLock', component: ProLockComponent },
  { path: 'forgetPassword', component: ForgetPasswordComponent },
  { path: 'proLock2', component: ProLock2Component },
  { path: 'proLock3', component: ProLock3Component },


  // for setting 
  { path: 'setting', component: SettingComponent },
  { path: 'appThem', component: AppThemComponent },
  { path: 'chnagePassword', component: ChnagePasswordComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
