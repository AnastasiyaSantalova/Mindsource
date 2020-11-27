import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MotivationRoutingModule } from './motivation-routing.module';
import { MotivationPageComponent } from './motivation-page/motivation-page.component';


@NgModule({
  declarations: [MotivationPageComponent],
  imports: [
    CommonModule,
    MotivationRoutingModule
  ]
})
export class MotivationModule { }
