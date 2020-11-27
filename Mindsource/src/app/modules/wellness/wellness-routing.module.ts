import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WellnessPageComponent } from './wellness-page/wellness-page.component';

const routes: Routes = [{ path: '', component: WellnessPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WellnessRoutingModule { }
