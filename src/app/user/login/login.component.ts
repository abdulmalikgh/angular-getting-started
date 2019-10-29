import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


import { AuthUserService } from '../auth-user.service'
@Component({
  selector: 'pm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  errorMessage : string;
  pageTitle: "Log In";

  constructor(private authService:AuthUserService) { }

  login(loginForm : NgForm){
   if(loginForm){
     const userName = loginForm.form.value.userName;
     const password = loginForm.form.value.password;
     console.log(userName,password)
     this.authService.login(userName,password)
   } else {
     this.errorMessage = "Please enter a usr name and password ";
   }
  }

  ngOnInit() {
  }

}
