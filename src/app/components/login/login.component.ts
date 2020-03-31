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
  
  constructor(private loginservice:UserService,
    private formBuilder: FormBuilder,
    private snackbar:MatSnackBar,
    private router:Router) { }

  ngOnInit(): void {
    this.login = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      type:['',[Validators.required]]
    });
  }
  loginForm(){
    console.log("User Login");
    this.loginservice.login(this.login.value).subscribe(response => {
      localStorage.setItem('token', response['data']);
      console.log(response)
          this.snackbar.open("User Logged in Successfully", '', {
        duration: 2000,
      });
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
