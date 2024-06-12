import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarvelComponent } from './marvel.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { ComicsComponent } from './pages/comics/comics.component';
import { CreatorsComponent } from './pages/creators/creators.component';
import { EventsComponent } from './pages/events/events.component';
import { SeriesComponent } from './pages/series/series.component';
import { StoriesComponent } from './pages/stories/stories.component';

const routes: Routes = [
  {
    path: '',
    component: MarvelComponent
  },
  {
    path: 'characters',
    component: CharactersComponent,
  },
  {
    path: 'comics',
    component: ComicsComponent,
  },
  {
    path: 'creators',
    component: CreatorsComponent,
  },
  {
    path: 'events',
    component: EventsComponent,
  },
  {
    path: 'series',
    component: SeriesComponent,
  },
  {
    path: 'stories',
    component: StoriesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarvelRoutingModule { }
