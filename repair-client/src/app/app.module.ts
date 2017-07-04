import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core'
import { AppComponent } from './app.component';
import {Login} from './login/app.login.view';
import {GetUserService} from './users/getuserService';
import { HttpModule,Jsonp} from '@angular/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,Login],
  imports: [
    BrowserModule,AgmCoreModule.forRoot({
    }),HttpModule,FormsModule],
  providers: [AppComponent,GetUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
