import { MaterialModule } from './../material/material.module';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CombatComponent } from './combat.component';
import { RouterModule } from '@angular/router';
import { CombateTableComponent } from './combate-table/combate-table.component';
import { AddCombatantComponent } from './add-combatant/add-combatant.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [CombatComponent, CombateTableComponent, AddCombatantComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
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
