import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersComponent } from './characters/characters.component';
import { CharactersHomeComponent } from './characters-home/characters-home.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { Routes, RouterModule } from '@angular/router';

const ROUTES: Routes = [
  {
      path: '', component: CharactersComponent,
      children: [
          {
              path: '',
              component: CharactersHomeComponent
          },
          {
              path: ':id',
              component: CharacterDetailsComponent
          }
      ]
  }
];

@NgModule({
  declarations: [CharactersComponent, CharactersHomeComponent, CharacterDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class CharactersModule { }
