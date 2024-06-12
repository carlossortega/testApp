import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes.component';
import { HeroFormComponent } from './pages/hero-form/hero-form.component';
import { HeroComponent } from './pages/hero/hero.component';

const routes: Routes = [
  {
    path: '',
    component: HeroesComponent
  },
  {
    path: 'create',
    component: HeroFormComponent
  },
  {
    path: 'edit/:id',
    component: HeroFormComponent
  },
  {
    path: ':id',
    component: HeroComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
