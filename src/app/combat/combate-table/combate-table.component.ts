import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-combate-table',
  templateUrl: './combate-table.component.html',
  styleUrls: ['./combate-table.component.scss']
})
export class CombateTableComponent implements OnInit, OnChanges {
  @Input() dataSource;
  combatArray = []
  activeTurn = 0;
  totalTurns = 0
  hpChangeFormControl = new FormControl();
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(sp: SimpleChanges) {
    if(this.dataSource) {
      this.combatArray.push(this.dataSource);
      this.sortOrder()
    }
  }
  nextTurn() {
    this.activeTurn++;
    if (this.activeTurn === this.combatArray.length) {
      this.activeTurn = 0;
      this.totalTurns++;
    }
  }
  sortOrder() {
    this.combatArray.sort(function(a, b){return b.init - a.init})
  }
  updateHp(el, direction) {
    if (!this.hpChangeFormControl.value || isNaN(this.hpChangeFormControl.value)) {
      return;
    }
    direction === 'add' ? el.hp = Number(el.hp) + Number(this.hpChangeFormControl.value) :
      el.hp = Number(el.hp) - Number(this.hpChangeFormControl.value);
    if( el.hp < 0) {
      el.hp = 0;
    }
  }
  removeElement(el) {
    this.combatArray = this.combatArray.filter(element => element != el);
    if (!this.combatArray.length) {
      this.totalTurns = 0;
    }
  }
}
