import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductModule } from './product/product.module';
import { Error404Component } from './error-404.component';
import { UserModule } from './user/user.module';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'welcome',component:HomeComponent},
      {path:'', redirectTo:'welcome',pathMatch:'full'},
      {path:'**',component:Error404Component}
    ]),
    ProductModule,
    UserModule
  ],
  providers:[
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
