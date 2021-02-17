import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-add-combatant',
  templateUrl: './add-combatant.component.html',
  styleUrls: ['./add-combatant.component.scss']
})
export class AddCombatantComponent implements OnInit {
  @Input() charactes =[]
  @Input() monsters =[]
  @Output() addElement = new EventEmitter<any>()
  initFormControl = new FormControl('');
  hpFormControl = new FormControl('');
  myControl = new FormControl();
  selectedElement;
  combatArray = [];
  filteredOptions: Observable<any[]>;
  constructor() { }

  ngOnInit(): void {
    const dataSource = [...this.monsters, ...this.charactes];
    dataSource.forEach(el => this.combatArray.push(this.sanitizeElement(el)))
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.combatArray.filter(el => el.name.toLowerCase().indexOf(filterValue) === 0);
  }
  sanitizeElement(element) {
    return {
      name: element.header.charname || element.header.monstername,
      image: element.image,
      init: 0,
      hp: 0,
      ac: this.toNumberAtt(element.combat.ac) || element.combat.armorClass
    }
  }
  toNumberAtt(el) {
    if (!el) {
      return el
    }
    const number = el.split(" ")[0]
    return Number(number);
  }
  addToCombat() {
    const element = this.combatArray.find(el => el.name === this.myControl.value)
    element.hp = this.hpFormControl.value
    element.init = this.initFormControl.value
    this.addElement.emit(element)
  }
}
