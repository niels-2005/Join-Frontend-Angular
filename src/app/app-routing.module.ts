import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SummaryComponent } from './components/summary/summary.component';
import { LegalnoticeComponent } from './components/legalnotice/legalnotice.component';
import { BoardComponent } from './components/board/board.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'summary', component: SummaryComponent},
  {path: 'legal-notice', component: LegalnoticeComponent},
  {path: 'board', component: BoardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
