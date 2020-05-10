import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ExamAdminComponent } from './exam-admin.component';
import { ExamAdminRoutingModule } from './exam-admin-routing.module';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    ExamAdminComponent
  ],
  imports: [
    CommonModule,
    ExamAdminRoutingModule
  ]
})
export class ExamAdminModule { }
