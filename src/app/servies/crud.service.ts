import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  base_url: any;

  constructor(
    private http: HttpClient,
    private _shared: SharedService
  ) {
    this._shared.base_url.subscribe(
      (res: any) => {
        this.base_url = res
      }
    )
  }

  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  // ****** sinup ****** //
  get_Institute() {
    return this.http.get(`${this.base_url}Institute`)
  }
  get_select_course(inst_id: any) {
    return this.http.get(`${this.base_url}Course?Inst_id=${inst_id}`)
  }
  getCallageByState(state: string, inst_id: any) {
    return this.http.get(`${this.base_url}/collegeData?StateName=${state}&Inst_Id=${inst_id}`)
  }
  reg_post(data: any) {
    return this.http.post(`${this.base_url}Registration/InsertRegistration`, data);
  }
  get_countery() {
    return this.http.get(`https://restcountries.com/v2/all`)
  }

  // ****** login ****** //
  login(data: any) {
    return this.http.post(`${this.base_url}Login`, data)
  }

  // ****** profile ****** //
  profile_update(data: any, id: number) {
    return this.http.post(`${this.base_url}UserProfile`, data)
  }
  get_profile(id: Number, inst_id: any) {
    return this.http.get(`${this.base_url}UserProfile/Profile?Id=${id}&Inst_Id=${inst_id}`)
  }

  // ****** banner ****** //
  get_banner(inst_id: any) {
    return this.http.get(`${this.base_url}/Banner?Inst_ID=${inst_id}`)
  }

  get_subject(id: number, inst_id: any) {
    return this.http.get(`${this.base_url}Subject?Inst_ID=${inst_id}&Id=${id}`)
  }

  get_unit(data: any) {
    return this.http.post(`${this.base_url}Unit`, data)
  }

  get_free_Video(inst_id: any) {
    return this.http.get(`${this.base_url}FreeVideo?Inst_ID=${inst_id}`, { headers: this.headers })
  }

  get_videos(inst_id: any, id: number) {
    return this.http.get(`${this.base_url}VideoView?Inst_ID=${inst_id}&UnitId=${id}`)
  }

  // ****** validity ****** //
  getValidity(id: any, inst_id: any) {
    return this.http.get(`${this.base_url}UserProfile/Profile?Id=${id}&Inst_Id=${inst_id}`)
  }

  // ****** All Mix Question ****** //

  get_mcq(data: any) {
    return this.http.post(`${this.base_url}AllMCQ`, data)
  }

  get_mix_mcq(data: any) {
    return this.http.post(`${this.base_url}AllMixMCQ`, data)
  }

  get_suggess_mcq(inst_id: any, id: any) {
    return this.http.get(`${this.base_url}AllMixQuestion/Get_Question?Inst_Id=${inst_id}&course=${id}`, { headers: this.headers })
  }

  marks_mcq(data: any) {
    return this.http.post(`${this.base_url}AllMixQuestion/Insert_Question`, data)
  }

  get_review_mcq(inst_id: any, id: any) {
    return this.http.get(`${this.base_url}AllMixQuestion/Get_ReviewQuestion?Inst_Id=${inst_id}&UserId=${id}`, { headers: this.headers })
  }

  mcq_delele(inst_id: any, id: Number) {
    return this.http.delete(`${this.base_url}AllMixQuestion/Delete_Question?Inst_Id=${inst_id}&UserId=${id}`, { headers: this.headers })
  }

  // ****** Suggestion video ****** //
  get_Suggestionvideo(data: any) {    
    return this.http.post(`${this.base_url}SuggestedVideo`, data)
  }

  // ****** forget password or change password****** //
  emailVerify(email: string) {
    return this.http.post(`${this.base_url}VerifyOTP?EmailId=${email}`, { headers: this.headers })
  }
  SendOTPforgetPassword(email: any) {
    return this.http.post(`${this.base_url}/Forget?EmailId=${email}`, { headers: this.headers })
  }
  veryfy_otpFrogetPassword(email: string, data: any) {
    return this.http.post(`${this.base_url}/VerifyOTP?EmailId=${email}`, data)
  }
  change_password(email: string, password: string, inst_id: any) {
    return this.http.post(`${this.base_url}/changepasswordwithEmail?EmailId=${email}&Password=${password}&Inst_Id=${inst_id}`, { headers: this.headers })
  }

  // ****** All Question Bank ****** //
  get_QBlist(data: any) {
    return this.http.post(`${this.base_url}AllQbank`, data)
  }

  get_packages(data: any) {
    return this.http.post(`${this.base_url}StudentSelectSubscription`, data)
  }

  get_validity(user_id: any, inst_id: number) {
    return this.http.post(`${this.base_url}Payment_Confirmation?UserId=${user_id}&Inst_Id=${inst_id}`, { headers: this.headers })
  }

  GetACallBack(data: any) {
    return this.http.post(`${this.base_url}/RequestCallBack`, data)
  }

  ////////// yaha tak complate ho geya hai but forget password ko chhor kar ab niche ka karna hai /////////



  get_user() {
    return this.http.get(`${this.base_url}StudentApi`)
  }

  DeviesIdUpdate(id: any, data: any) {
    return this.http.post(`${this.base_url}/UpdateDevice?Id=${id}`, data)
  }

  // getAppNewUpdate() {
  //   return this.http.get(`${this.base_url}AppVersion`)
  // }
}
