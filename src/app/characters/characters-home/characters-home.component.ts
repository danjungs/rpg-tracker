import { Component, OnInit } from '@angular/core';
import { CHARACTERS_BANNER, CHARACTERS } from '../character.constants';

@Component({
  selector: 'app-characters-home',
  templateUrl: './characters-home.component.html',
  styleUrls: ['./characters-home.component.scss']
})
export class CharactersHomeComponent implements OnInit {
  charactersBanner = CHARACTERS_BANNER;
  characters = CHARACTERS;
  constructor() { }

  ngOnInit(): void {
  }

}
