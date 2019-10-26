import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';


@NgModule({
    imports:[
     RouterModule.forChild([
         {path:'login',component: LoginComponent}
     ])
    ],
    declarations:[

    LoginComponent
]
})
export class UserModule{ } 