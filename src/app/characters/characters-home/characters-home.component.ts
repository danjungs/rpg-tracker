import { Component, OnInit } from '@angular/core';
import { CHARACTERS_BANNER, CHARACTERS, CHARACTERS_SEARCH_OPTIONS } from '../character.constants';

@Component({
  selector: 'app-characters-home',
  templateUrl: './characters-home.component.html',
  styleUrls: ['./characters-home.component.scss']
})
export class CharactersHomeComponent implements OnInit {
  charactersBanner = CHARACTERS_BANNER;
  characters = CHARACTERS;
  searchBarOptions = CHARACTERS_SEARCH_OPTIONS;
  constructor() { }

  ngOnInit(): void {
  }
  dataChanged(evt) {
    const { key, value } = evt;
    this.characters = CHARACTERS.filter(el => {
      const charValue = el.header[key].toLowerCase();
      return charValue.includes(value.toLowerCase())})
  }
}
