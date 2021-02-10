import { MonsterInterface } from './../../../interface/monsters.interface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-monsters-table',
  templateUrl: './monsters-table.component.html',
  styleUrls: ['./monsters-table.component.scss']
})
export class MonstersTableComponent implements OnInit {
  @Input() dataSource: MonsterInterface[] | [] =[]
  displayedColumns: string[] = ['icon', 'name', 'type', 'size', 'challenge'];
  constructor() { }

  ngOnInit(): void {
  }

}
