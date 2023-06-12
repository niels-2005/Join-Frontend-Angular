import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SitebarPlusHeaderComponent } from './components/sitebar-plus-header/sitebar-plus-header.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotMyPasswordComponent } from './forgot-my-password/forgot-my-password.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SitebarPlusHeaderComponent,
    RegisterComponent,
    ForgotMyPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
