import { CHARACTERS } from './../characters/character.constants';
import { MONSTERS } from './../monsters/monsters.constants';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-combat',
  templateUrl: './combat.component.html',
  styleUrls: ['./combat.component.scss']
})
export class CombatComponent implements OnInit {
  combatBanner = {
    caption: 'Combate',
    image: 'combat-banner'
  };
  turnCounter = 0;
  addContent = false;
  newCombatant;
  monsters = JSON.parse(JSON.stringify(MONSTERS));
  charactes = JSON.parse(JSON.stringify(CHARACTERS));
  constructor() { }

  ngOnInit(): void {
  }
  openAddContent() {
    this.addContent = !this.addContent;
  }
  addToCombatArray(el) {
    this.newCombatant = el
  }
  rand(max) {
    return Math.floor(Math.random() * max);
  }
}
