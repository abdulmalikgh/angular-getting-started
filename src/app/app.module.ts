import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductModule } from './product/product.module';
import { Error404Component } from './error-404.component';
import { UserModule } from './user/user.module';
import { SharedModule } from './shared/shared.module';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'welcome',component:HomeComponent},
      {path:'', redirectTo:'welcome',pathMatch:'full'},
      {path:'**',component:Error404Component}
    ]),
    SharedModule,
    ProductModule,
    UserModule
  ],
  providers:[
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
