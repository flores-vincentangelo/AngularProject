import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
    ]),
    password: new FormControl('', [
      Validators.required
    ])
  });
  router: any;
  
  // constructor() {}
  constructor(private loginService: LoginService) { 
    if (this.loginService.loggedInUserValue) {
      this.router.navigate(['/']);
  }
  }

  ngOnInit(): void {
  }

  get email() {
    return this.userForm.get('email');
  }

  get password() {
    return this.userForm.get('password');
  }
}