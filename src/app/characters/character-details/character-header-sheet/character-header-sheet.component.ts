import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-character-header-sheet',
  templateUrl: './character-header-sheet.component.html',
  styleUrls: ['./character-header-sheet.component.scss']
})
export class HeaderSheetComponent implements OnInit {
  @Input() character;
  constructor() { }

  ngOnInit(): void {
  }

}
