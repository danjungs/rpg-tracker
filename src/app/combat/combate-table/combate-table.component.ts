import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-combate-table',
  templateUrl: './combate-table.component.html',
  styleUrls: ['./combate-table.component.scss']
})
export class CombateTableComponent implements OnInit, OnChanges {
  @Input() dataSource =[]
  combatArray = []
  activeTurn;
  totalTurns = 0
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(sp: SimpleChanges) {
    const changedDataSource = []
    this.dataSource.forEach(el => changedDataSource.push(this.sanitizeElement(el)))
    this.combatArray = changedDataSource;
  }
  sanitizeElement(element) {
    return {
      name: element.header.charname || element.header.monstername,
      image: element.image,
      init: this.rand(21),
    }
  }
  nextTurn() {
    if (this.activeTurn === this.dataSource.length -1) {
      this.activeTurn = 0;
      this.totalTurns++;
    }
    this.activeTurn++;
  }
  rand(max) {
    return Math.floor(Math.random() * max);
  }
  sortOrder() {
    this.combatArray.sort(function(a, b){return b.init - a.init})
  }
}
