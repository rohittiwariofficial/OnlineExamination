import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExamAdminComponent } from './exam-admin.component';


const routes: Routes = [
  {
    path: '',
    component: ExamAdminComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamAdminRoutingModule { }
