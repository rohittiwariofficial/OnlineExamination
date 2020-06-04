import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExamAdminComponent } from './exam-admin.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from '../_helpers/auth.guard';


const routes: Routes = [
  {
    path: '',
    component: ExamAdminComponent,
    pathMatch: 'full', 
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  { 
    path: '**', redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamAdminRoutingModule { }
