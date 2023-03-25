import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GiphysRoutingModule } from './giphys-routing.module';
import { GiphysComponent } from './giphys.component';
import { SharedModule } from '../../../shared/shared.module';


@NgModule({
  declarations: [
    GiphysComponent
  ],
  imports: [
    CommonModule,
    GiphysRoutingModule,
    SharedModule,
  ]
})
export class GyphysModule { }
