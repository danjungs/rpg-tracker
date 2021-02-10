import { MONSTERS_BANNER, MONSTERS_SEARCH_OPTIONS, MONSTERS } from './../monsters.constants';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-monsters-home',
  templateUrl: './monsters-home.component.html',
  styleUrls: ['./monsters-home.component.scss']
})
export class MonstersHomeComponent implements OnInit {
  monstersBanner = MONSTERS_BANNER;
  monsters = MONSTERS;
  searchBarOptions = MONSTERS_SEARCH_OPTIONS;

  constructor() { }

  ngOnInit(): void {
  }
  dataChanged(evt) {
    const { key, value } = evt;
    this.monsters = MONSTERS.filter(el => {
      const charValue = el.header[key].toLowerCase();
      return charValue.includes(value.toLowerCase())})
  }
}
