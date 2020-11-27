import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GrowPageComponent } from './grow-page/grow-page.component';

const routes: Routes = [{ path: '', component: GrowPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GrowRoutingModule { }
