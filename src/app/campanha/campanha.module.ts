import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampanhaComponent } from './campanha/campanha.component';
import { RouterModule, Routes } from '@angular/router';
import { CampanhaHomeComponent } from './campanha-home/campanha-home.component';
import { CampanhaDetailsComponent } from './campanha-details/campanha-details.component';

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
  declarations: [CampanhaComponent, CampanhaHomeComponent, CampanhaDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class CampanhaModule { }
