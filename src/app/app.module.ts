import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Query Http module
import { HttpClientModule } from '@angular/common/http';

// Query service component
import { UserService } from './shared/user.service'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  // new service UsersService to providers
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }