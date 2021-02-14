import { MonsterInterface } from './../../interface/monsters.interface';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { getMonster } from '../monsters.constants';

@Component({
  selector: 'app-monster-details',
  templateUrl: './monster-details.component.html',
  styleUrls: ['./monster-details.component.scss']
})
export class MonsterDetailsComponent implements OnInit {
  monster: MonsterInterface;
  constructor(public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.monster = getMonster(id);
      if( !this.monster) {
        //TODO ERROR CHARACTER
      }
    })
  }

}
