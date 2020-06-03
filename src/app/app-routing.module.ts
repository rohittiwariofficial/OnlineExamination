import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';


const routes: Routes = [
  {
    path: 'home',
    component: AppComponent
  },
  {
    path: 'admin',
    loadChildren: () => import('./exam-admin/exam-admin.module').then(m => m.ExamAdminModule)
  },
  {
    path: 'sme',
    loadChildren: () => import('./sme/sme.module').then(m => m.SmeModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
