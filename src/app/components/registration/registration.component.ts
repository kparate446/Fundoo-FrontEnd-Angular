import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user-service/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registration: FormGroup;
  submitted = false;

  constructor(private registrationservice:UserService,
    private formBuilder: FormBuilder,
    private snackbar:MatSnackBar,
    private router:Router) { }

  ngOnInit(): void {
    this.registration = this.formBuilder.group({
      firstName:['',[Validators.required,Validators.minLength(3)]],
      lastName:['',[Validators.required,Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber:['',[Validators.required,Validators.minLength(10)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  registrationform(){
    console.log("User Registartion");
    this.registrationservice.registration(this.registration.value).subscribe(response => {
      localStorage.setItem('token', response['data']);
      console.log(response)
          this.snackbar.open("User Registration Successfully", 'register', {
        duration: 2000,
      });
      this.router.navigate(['/register'])

    }, error => {
      console.log("Registration response", error);
    })
  }

}
