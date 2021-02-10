import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  @Input() selectOptions;
  @Input() firstOption;
  @Output() inputChanged = new EventEmitter<any>();
  value;
  keySelect
  constructor() { }

  ngOnInit(): void {
    this.keySelect = this.firstOption;
  }
  dataChanged(evt) {
    const dataChanged = { key: this.keySelect, value: this.value }
    this.inputChanged.emit(dataChanged)
  }
}
