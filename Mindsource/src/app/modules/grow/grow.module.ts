import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GrowRoutingModule } from './grow-routing.module';
import { GrowPageComponent } from './grow-page/grow-page.component';

@NgModule({
  declarations: [GrowPageComponent],
  imports: [
    CommonModule,
    GrowRoutingModule
  ]
})
export class GrowModule { }
