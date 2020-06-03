import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SmeRoutingModule } from './sme-routing.module';
import { SmeComponent } from './sme.component';


@NgModule({
  declarations: [SmeComponent],
  imports: [
    CommonModule,
    SmeRoutingModule
  ]
})
export class SmeModule { }
