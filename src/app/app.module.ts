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
import { AddtaskboardbuttonComponent } from './components/addtaskpopup/addtaskboardbutton.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddtaskComponent } from './components/addtask/addtask.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactsComponent } from './components/contacts/contacts.component';
import { FormsModule } from '@angular/forms';
import { AddcontactpopupComponent } from './components/addcontactpopup/addcontactpopup.component';

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
    AddtaskComponent,
    ContactsComponent,
    AddcontactpopupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
