import { Injectable } from '@angular/core';
import { User } from './user'
import { MessageService } from '../messages/message.service'

@Injectable()
export class AuthUserService {
  currentUser : User;
  
  get isLoggedIn():boolean{
    return !!this.currentUser;
  }
  constructor( private messageService: MessageService) { }
  login(userName:string, password:string):void{
    if(!userName || !password){
      this.messageService.addMessage("please enter your Username and Password ")
      return;
    }
    if(userName === 'admin') {
      this.currentUser = {
        id: 1,
        userName: userName,
        isAdmin:true
      };
      this.messageService.addMessage('admin Login')
      return;
    }
    this.currentUser = {
      id: 2,
      userName:userName,
      isAdmin:false
    }
    this.messageService.addMessage('User' + this.currentUser.userName)
  }
  Logout():void{
    this.currentUser = null;
  }
}
