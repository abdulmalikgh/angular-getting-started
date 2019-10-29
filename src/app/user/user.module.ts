import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms'


@NgModule({
    imports:[
        SharedModule,
        FormsModule,
        RouterModule.forChild([
         {path:'login',component: LoginComponent}
     ])
    ],
    declarations:[

    LoginComponent
],
})
export class UserModule{ } 