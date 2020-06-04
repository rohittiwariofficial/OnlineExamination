import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SmeRoutingModule } from './sme-routing.module';
import { SmeComponent } from './sme.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [SmeComponent, HeaderComponent, FooterComponent, SidebarComponent, DashboardComponent, LoginComponent],
  imports: [
    CommonModule,
    SmeRoutingModule
  ]
})
export class SmeModule { }
