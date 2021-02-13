import { Component, OnInit, Input } from '@angular/core';
import { TextAreaCampanhaInterface } from 'src/app/interface/campanha.interface';


@Component({
  selector: 'app-text-element',
  templateUrl: './text-element.component.html',
  styleUrls: ['./text-element.component.scss']
})
export class TextElementComponent implements OnInit {
  @Input() element
  constructor() { }

  ngOnInit(): void {
    console.log(this.element.type)
  }

}
