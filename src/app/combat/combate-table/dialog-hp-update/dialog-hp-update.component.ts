import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-hp-update',
  templateUrl: './dialog-hp-update.component.html',
  styleUrls: ['./dialog-hp-update.component.scss']
})
export class DialogHPUpdateComponent implements OnInit {
  number;
  constructor(public dialogRef: MatDialogRef<DialogHPUpdateComponent>,
              @Inject(MAT_DIALOG_DATA) public data) {}

  ngOnInit(): void {
  }
  updateHP(option) {
    if(!this.number) {
      return this.data.hp
    }
    if(option === 'minus') {
      return this.data.hp - Number(this.number);
    }
    return this.data.hp + Number(this.number);
  }

}
