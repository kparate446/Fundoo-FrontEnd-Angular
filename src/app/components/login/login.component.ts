import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user-service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }
  login(){
    console.log("hello how are you");
  }
}
