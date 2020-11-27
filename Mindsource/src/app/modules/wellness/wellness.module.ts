import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WellnessRoutingModule } from './wellness-routing.module';
import { WellnessPageComponent } from './wellness-page/wellness-page.component';


@NgModule({
  declarations: [WellnessPageComponent],
  imports: [
    CommonModule,
    WellnessRoutingModule
  ]
})
export class WellnessModule { }
