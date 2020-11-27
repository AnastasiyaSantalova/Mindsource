import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MotivationPageComponent } from './motivation-page/motivation-page.component';

const routes: Routes = [{ path: '', component: MotivationPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MotivationRoutingModule { }
