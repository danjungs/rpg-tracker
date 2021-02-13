import { MaterialModule } from './../material/material.module';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampanhaComponent } from './campanha/campanha.component';
import { RouterModule, Routes } from '@angular/router';
import { CampanhaHomeComponent } from './campanha-home/campanha-home.component';
import { CampanhaDetailsComponent } from './campanha-details/campanha-details.component';
import { QuickMenuComponent } from './campanha-details/quick-menu/quick-menu.component';

const ROUTES: Routes = [
  {
      path: '', component: CampanhaComponent,
      children: [
          {
              path: '',
              component: CampanhaHomeComponent
          },
          {
              path: ':id',
              component: CampanhaDetailsComponent
          }
      ]
  }
];

@NgModule({
  declarations: [CampanhaComponent, CampanhaHomeComponent, CampanhaDetailsComponent, QuickMenuComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    RouterModule.forChild(ROUTES),
  ]
})
export class CampanhaModule { }
