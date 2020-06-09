import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ExamAdminComponent } from './exam-admin.component';
import { ExamAdminRoutingModule } from './exam-admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    ExamAdminComponent,
    DashboardComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    ExamAdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ExamAdminModule { }
