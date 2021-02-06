import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';

const sharedComponents = [
  HeaderComponent,
]

@NgModule({
  declarations: [...sharedComponents],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [...sharedComponents]
})
export class SharedModule { }
