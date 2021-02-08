import { CAMPANHAS_BANNER, CAMPANHAS_CARDS } from './../campanha.constants';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-campanha-home',
  templateUrl: './campanha-home.component.html',
  styleUrls: ['./campanha-home.component.scss']
})
export class CampanhaHomeComponent implements OnInit {
  campanhaBanner = CAMPANHAS_BANNER;
  campanhaCard = CAMPANHAS_CARDS;
  constructor() { }

  ngOnInit(): void {
  }

}
