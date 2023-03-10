import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GiphysRoutingModule } from './giphys-routing.module';
import { GiphysComponent } from './giphys.component';


@NgModule({
  declarations: [
    GiphysComponent
  ],
  imports: [
    CommonModule,
    GiphysRoutingModule,
  ]
})
export class GyphysModule { }
