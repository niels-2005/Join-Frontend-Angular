import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotMyPasswordComponent } from './components/forgot-my-password/forgot-my-password.component';
import { SitebarComponent } from './components/sitebar/sitebar.component';
import { KanbanprojecttoolheaderComponent } from './components/kanbanprojecttoolheader/kanbanprojecttoolheader.component';
import { SummaryComponent } from './components/summary/summary.component';
import { LegalnoticeComponent } from './components/legalnotice/legalnotice.component';
import { BoardComponent } from './components/board/board.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { AddtaskboardbuttonComponent } from './components/addtaskboardbutton/addtaskboardbutton.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgotMyPasswordComponent,
    SitebarComponent,
    KanbanprojecttoolheaderComponent,
    SummaryComponent,
    LegalnoticeComponent,
    BoardComponent,
    AddtaskboardbuttonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
