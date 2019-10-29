import { Component } from '@angular/core';
import { AuthUserService } from '../app/user/auth-user.service'

@Component({
  selector:'pm-root',
  templateUrl:'./app.component.html'

})

export class AppComponent{
  pageTitle: string = "Acme Product Management";
  constructor( private authuserService:AuthUserService){}

  get isLoggedIn(): boolean{
    return this.authuserService.isLoggedIn;
  }
  get UserName():string{
  if(this.authuserService.currentUser) {
    return this.authuserService.currentUser.userName;
  }
  return '';
  }
  loutOut():void{
    this.authuserService.Logout();
    console.log( "log Out ");
  }
}
