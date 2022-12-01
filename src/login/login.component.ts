import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    userpwd: new FormControl('', Validators.required),
  });

  errorMessage:string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login(): void {
    this.errorMessage = '';
    if(this.isValidUser()) this.router.navigate(['/dashboard']);
  }

  isValidUser() {
    if(!this.loginForm.valid || this.loginForm.controls['username'].value !== 'admin' || 
      this.loginForm.controls['userpwd'].value !== 'super') {
        this.errorMessage = 'Please enter the correct username and password';
        this.loginForm.reset();
        return false
      }
      return true;
  }

}
