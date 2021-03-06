import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'campanha',
    loadChildren: () => import('./campanha/campanha.module').then(m => m.CampanhaModule)
  },
  {
    path: 'characters',
    loadChildren: () => import('./characters/characters.module').then(m => m.CharactersModule)
  },
  {
    path: 'monsters',
    loadChildren: () => import('./monsters/monsters.module').then(m => m.MonstersModule)
  },
  {
    path: 'combat',
    loadChildren: () => import('./combat/combat.module').then(m => m.CombatModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
