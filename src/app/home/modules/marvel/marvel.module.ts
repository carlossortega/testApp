import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarvelRoutingModule } from './marvel-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MarvelComponent } from './marvel.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { ComicsComponent } from './pages/comics/comics.component';
import { CreatorsComponent } from './pages/creators/creators.component';
import { EventsComponent } from './pages/events/events.component';
import { SeriesComponent } from './pages/series/series.component';
import { StoriesComponent } from './pages/stories/stories.component';


@NgModule({
  declarations: [
    MarvelComponent,
    CharactersComponent,
    ComicsComponent,
    CreatorsComponent,
    EventsComponent,
    SeriesComponent,
    StoriesComponent,
  ],
  imports: [
    CommonModule,
    MarvelRoutingModule,
    SharedModule,
  ],
})
export class MarvelModule { }
