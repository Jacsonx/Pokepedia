import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
        path: '',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
      redirectTo: '',
    pathMatch: 'full'
  },
    {
    path: 'pokemons',
    loadChildren: () => import('./pokemons/pokemons.module').then( m => m.PokemonsPageModule)
  },
    {
        path: 'pokemon',
        loadChildren: () => import('./pokemon/pokemon.module').then(m => m.PokemonPageModule)
    },
  {
    path: 'evolutions',
    loadChildren: () => import('./evolutions/evolutions.module').then( m => m.EvolutionsPageModule)
  },
  {
    path: 'items',
    loadChildren: () => import('./items/items.module').then( m => m.ItemsPageModule)
  },
  {
    path: 'abilities',
    loadChildren: () => import('./abilities/abilities.module').then( m => m.AbilitiesPageModule)
  },
  {
    path: 'games',
    loadChildren: () => import('./games/games.module').then( m => m.GamesPageModule)
  },
  {
    path: 'locations',
    loadChildren: () => import('./locations/locations.module').then( m => m.LocationsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
