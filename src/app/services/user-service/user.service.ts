import { Injectable } from '@angular/core';
import { HttpService } from "../http-service/http.service";
import { environment } from "../../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = environment.url;
  constructor(public HttpService: HttpService) { }
  login(data) {
    console.log(data)
    return this.HttpService.post(this.url + '/loginusers', data);
  }
  registration(data) {
    console.log(data)
    return this.HttpService.post(this.url + '/addusers', data);
  }
  forgotpassword(data){
    console.log(data)
    return this.HttpService.post(this.url + '/forgotpassword', data );
  }
  resetpassword(data){
    console.log(data)
    return this.HttpService.put(this.url + '/resetpassword',data);
  }
}
