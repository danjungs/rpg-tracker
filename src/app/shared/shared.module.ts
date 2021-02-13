import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { ParalaxBannerComponent } from './paralax-banner/paralax-banner.component';
import { LandscapeCardComponent } from './cards/landscape-card/landscape-card.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';
import { TextElementComponent } from './text-element/text-element.component';

const sharedComponents = [
  HeaderComponent,
  LandscapeCardComponent,
  ParalaxBannerComponent,
  SearchBarComponent,
  TextElementComponent
]

@NgModule({
  declarations: [...sharedComponents],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FormsModule,
  ],
  exports: [...sharedComponents]
})
export class SharedModule { }
