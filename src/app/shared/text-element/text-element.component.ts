import { Component, OnInit, Input } from '@angular/core';
import { TextAreaCampanhaInterface } from 'src/app/interface/campanha.interface';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-text-element',
  templateUrl: './text-element.component.html',
  styleUrls: ['./text-element.component.scss']
})
export class TextElementComponent implements OnInit {
  @Input() element
  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

}
