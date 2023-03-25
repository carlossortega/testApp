import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesComponent } from './heroes.component';
import { SharedModule } from '../../../shared/shared.module';
import { HeroFormComponent } from './pages/hero-form/hero-form.component';
import { HeroComponent } from './pages/hero/hero.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    HeroesComponent,
    HeroFormComponent,
    HeroComponent,
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ]
})
export class HeroesModule { }
