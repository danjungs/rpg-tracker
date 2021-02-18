import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogHPUpdateComponent } from './dialog-hp-update/dialog-hp-update.component';

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
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  ngOnChanges(sp: SimpleChanges) {
    if(this.dataSource) {
      this.combatArray.push(this.dataSource);
      this.sortOrder()
    }
  }
  nextTurn() {
    if (this.activeTurn === this.combatArray.length -1) {
      this.activeTurn = 0;
      this.totalTurns++;
      return;
    }
    this.activeTurn++;
  }
  sortOrder() {
    this.combatArray.sort(function(a, b){return b.init - a.init})
  }
  openDialog(element): void {
    const dialogRef = this.dialog.open(DialogHPUpdateComponent, {
      width: '200px',
      data: element
    });
    dialogRef.afterClosed().subscribe(result => {
      element.hp = result;
    });
  }
}
