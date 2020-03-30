import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user-service/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {
  ForgotPassword: FormGroup;
  submitted = false;

  constructor(private forgotpasswordservice:UserService,
    private formBuilder: FormBuilder,
    private snackbar:MatSnackBar,
    private router:Router) { }

  ngOnInit(): void {
    this.ForgotPassword = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
      });
  }
  forgotPasswordForm(){
    console.log("User forgotpassword");
    this.forgotpasswordservice.forgotpassword(this.ForgotPassword.value).subscribe(response => {
      localStorage.setItem('token', response['data']);
      console.log(response)
          this.snackbar.open("Forgot Password is Successfully", '', {
        duration: 2000,
      });
      this.router.navigate(['/forgotpassword'])

    }, error => {
      console.log("Forgot password response", error);
    })
  }
}
