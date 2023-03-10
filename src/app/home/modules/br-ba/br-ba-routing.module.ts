import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrBaComponent } from './br-ba.component';

const routes: Routes = [
  {
    path: '',
    component: BrBaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrBaRoutingModule { }
