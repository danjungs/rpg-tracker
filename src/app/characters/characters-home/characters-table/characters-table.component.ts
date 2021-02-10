import { CharacterInterface } from './../../../interface/characters.interface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-characters-table',
  templateUrl: './characters-table.component.html',
  styleUrls: ['./characters-table.component.scss']
})
export class CharactersTableComponent implements OnInit {
  @Input() dataSource: CharacterInterface[] | [] =[]
  displayedColumns: string[] = ['icon', 'name', 'class', 'race', 'player'];
  constructor() { }

  ngOnInit(): void {
  }
  onClick(row) {
    console.log(row, 'AAAAA')
  }
}
