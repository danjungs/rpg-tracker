import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonstersComponent } from './monsters/monsters.component';
import { MonstersHomeComponent } from './monsters-home/monsters-home.component';
import { MonsterDetailsComponent } from './monster-details/monster-details.component';
import { Routes, RouterModule } from '@angular/router';
import { MonstersTableComponent } from './monsters-home/monsters-table/monsters-table.component';
import { MaterialModule } from '../material/material.module';

const ROUTES: Routes = [
  {
      path: '', component: MonstersComponent,
      children: [
          {
              path: '',
              component: MonstersHomeComponent
          },
          {
              path: ':id',
              component: MonsterDetailsComponent
          }
      ]
  }
];

@NgModule({
  declarations: [MonstersComponent, MonstersHomeComponent, MonsterDetailsComponent, MonstersTableComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class MonstersModule { }
