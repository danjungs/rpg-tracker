import { CharacterInterface } from './../../interface/characters.interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { getCharacter } from '../character.constants';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss']
})
export class CharacterDetailsComponent implements OnInit {
  constructor(public route: ActivatedRoute) { }
  character: CharacterInterface;
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.character = getCharacter(id);
      if( !this.character) {
        //TODO ERROR CHARACTER
      }
      console.log(this.character)
    })
  }

}
