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
  combatArray = [];
  teste = 'ala'
  // monsters = JSON.parse(JSON.stringify(MONSTERS));
  charactes = JSON.parse(JSON.stringify(CHARACTERS));
  constructor() { }

  ngOnInit(): void {
  }
  addToCombatArray() {
    const data = this.charactes[0]
    this.combatArray = [...this.combatArray, data]
  }
  rand(max) {
    return Math.floor(Math.random() * max);
  }
}
