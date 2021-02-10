import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-character-main-sheet',
  templateUrl: './character-main-sheet.component.html',
  styleUrls: ['./character-main-sheet.component.scss']
})
export class CharacterMainSheetComponent implements OnInit {
  @Input() character;
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
  constructor() { }

  ngOnInit(): void {
  }

}
