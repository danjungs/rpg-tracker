import { HOME_CARDS, HOME_BANNER } from './home.constants';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  homeCards = HOME_CARDS;
  homeBanner = HOME_BANNER;
  constructor() { }

  ngOnInit(): void {
  }

}
