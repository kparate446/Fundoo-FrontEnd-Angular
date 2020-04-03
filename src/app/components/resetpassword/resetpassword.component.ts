import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user-service/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {
  resetpassword : FormGroup;
  submitted = false;

  constructor(private resetpasswordservice : UserService,
    private formBuilder: FormBuilder,
    private snackbar:MatSnackBar,
    private router:Router) { }

  ngOnInit(): void {
    this.resetpassword = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      type:['',[Validators.required]]
      });
  }
  resetPasswordForm(){
    console.log("User resetpassword");
    this.resetpasswordservice.resetpassword(this.resetpassword.value).subscribe(response => {
      localStorage.setItem('token', response['data']);
      console.log(response)
          this.snackbar.open("Reset Password is Successfully", '', {
        duration: 2000,
      });
      this.router.navigate(['/resetpassword'])
    }, error => {
      console.log("Reset password response", error);
    })
  }
}
