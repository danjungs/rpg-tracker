import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { ParalaxBannerComponent } from './paralax-banner/paralax-banner.component';
import { LandscapeCardComponent } from './cards/landscape-card/landscape-card.component';

const sharedComponents = [
  HeaderComponent,
  ParalaxBannerComponent,
  LandscapeCardComponent
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
