import { Injectable } from '@angular/core';
import { HttpService } from "../http-service/http.service";
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public HttpService:HttpService) { }
  login(data){
return this.HttpService.post('',data);
  }
}
