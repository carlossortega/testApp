import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'users',
        loadChildren: () => import('./modules/users/users.module').then( (m) => m.UsersModule )
      },
      {
        path: 'giphys',
        loadChildren: () => import('./modules/giphys/giphys.module').then( (m) => m.GyphysModule )
      },
      {
        path: 'countries',
        loadChildren: () => import('./modules/countries/countries.module').then( (m) => m.CountriesModule )
      },
      {
        path: 'marvel',
        loadChildren: () => import('./modules/marvel/marvel.module').then( (m) => m.MarvelModule )
      },
      {
        path: 'heroes',
        loadChildren: () => import('./modules/heroes/heroes.module').then( (m) => m.HeroesModule )
      },
      {
        path: 'movies',
        loadChildren: () => import('./modules/movies/movies.module').then( (m) => m.MoviesModule )
      },
    ]
  },
  {
    path: '**',
    redirectTo: 'menu',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
