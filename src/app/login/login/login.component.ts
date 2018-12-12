import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/authentication.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  url = 'app/users';
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,  
    private router: Router,
    private authenticationService: AuthenticationService,
    public snackBar: MatSnackBar
  ){
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(){
    this.authenticationService.login(
      this.loginForm.get('username').value,
      this.loginForm.get('password').value
    ).subscribe((userIsValid) => {
      if (userIsValid) {
        this.router.navigate(['/dashboard']);
      } else {
        this.snackBar.open('Incorrect Data', 'close', {
          duration: 2000,
        });
      }
    });		
  }
}
