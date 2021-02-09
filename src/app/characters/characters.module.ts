import { MaterialModule } from './../material/material.module';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersComponent } from './characters/characters.component';
import { CharactersHomeComponent } from './characters-home/characters-home.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { Routes, RouterModule } from '@angular/router';
import { CharactersTableComponent } from './characters-home/characters-table/characters-table.component';

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
  declarations: [CharactersComponent, CharactersHomeComponent, CharacterDetailsComponent, CharactersTableComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    RouterModule.forChild(ROUTES)
  ],
  exports: []
})
export class CharactersModule { }
