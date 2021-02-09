import { CharacterInterface } from './../../interface/interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { getCharacter } from '../character.constants';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss']
})
export class CharacterDetailsComponent implements OnInit {
skills = [
  { name : "Acrobatics", attr : "Dex", key: "acrobatics"},
  { name : "Animal Handling", attr : "Wis", key: "animalHandling"},
  { name : "Arcana", attr : "Int", key: "arcana"},
  { name : "Athletics", attr : "Str", key: "athletics"},
  { name : "Deception", attr : "Cha", key: "deception"},
  { name : "History", attr : "Int", key: "history"},
  { name : "Insight", attr : "Wis", key: "insight"},
  { name : "Intimidation", attr : "Cha", key: "intimidation"},
  { name : "Investigation", attr : "Int", key: "investigation"},
  { name : "Medicine", attr : "Wis", key: "medicine"},
  { name : "Nature", attr : "Int", key: "nature"},
  { name : "Perception", attr : "Wis", key: "perception"},
  { name : "Performance", attr : "Cha", key: "performance"},
  { name : "Persuasion", attr : "Cha", key: "persuasion"},
  { name : "Religion", attr : "Int", key: "religion"},
  { name : "Sleight of Hand", attr : "Dex", key: "sleightOfHand"},
  { name : "Stealth", attr : "Dex", key: "stealth"},
  { name : "Survival", attr : "Wis", key: "survival"},
]
  constructor(public route: ActivatedRoute) { }
  character: CharacterInterface;
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.character = getCharacter(id);
      if( !this.character) {
        //TODO ERROR CHARACTER
      }
      console.log(this.character)
    })
  }

}
