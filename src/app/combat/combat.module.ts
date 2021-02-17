import { MaterialModule } from './../material/material.module';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CombatComponent } from './combat.component';
import { RouterModule } from '@angular/router';
import { CombateTableComponent } from './combate-table/combate-table.component';



@NgModule({
  declarations: [CombatComponent, CombateTableComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    RouterModule.forChild([
      {
        path: '',
        component: CombatComponent,
      }
    ])
  ]
})
export class CombatModule { }
