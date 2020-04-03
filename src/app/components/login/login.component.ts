import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user-service/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login: FormGroup;
  submitted = false;
  hide;

  constructor(private loginservice:UserService,
    private formBuilder: FormBuilder,
    private snackbar:MatSnackBar,
    private router:Router) { }

  ngOnInit(): void {
    this.login = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      type:['',[Validators.required]]
    });
  }
  get f() { return this.login.controls; }
  loginForm(){
    console.log("User Login");
    this.loginservice.login(this.login.value).subscribe(response => {
      localStorage.setItem('token', response['data']);
      console.log(response)
      window.alert("User Logged in Successfully");
      //     this.snackbar.open("", '', {
      //   duration: 2000,
      // });
      this.router.navigate([''])
    }, error => {
      console.log("login response", error);
    })
  }
  navigate() {
    this.router.navigate(['/register'])
  }
  navigatepage() {
    this.router.navigate(['/forgotpassword'])
  }
}
