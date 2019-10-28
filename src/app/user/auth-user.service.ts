import { Injectable } from '@angular/core';
import { User } from './user'

@Injectable()
export class AuthUserService {
  currentUser : User;
  
  get isLoggedIn():boolean{
    return !!this.currentUser;
  }
  constructor() { }
  loging(userName:string, password:string):void{
    if(!userName || !password){
      this.m
    }
  }
}
