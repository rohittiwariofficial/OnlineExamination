import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SmeComponent } from './sme.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path: '',
    component: SmeComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SmeRoutingModule { }
