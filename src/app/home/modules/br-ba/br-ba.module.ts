import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrBaRoutingModule } from './br-ba-routing.module';
import { BrBaComponent } from './br-ba.component';


@NgModule({
  declarations: [
    BrBaComponent
  ],
  imports: [
    CommonModule,
    BrBaRoutingModule
  ]
})
export class BrBaModule { }
