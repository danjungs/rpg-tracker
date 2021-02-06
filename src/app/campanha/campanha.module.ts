import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampanhaComponent } from './campanha.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [CampanhaComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: CampanhaComponent,
      },
    ])
  ]
})
export class CampanhaModule { }
