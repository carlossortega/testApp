import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GiphysComponent } from './giphys.component';

const routes: Routes = [
  {
    path: '',
    component: GiphysComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GiphysRoutingModule { }
