import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-landscape-card',
  templateUrl: './landscape-card.component.html',
  styleUrls: ['./landscape-card.component.scss']
})
export class LandscapeCardComponent implements OnInit {
  @Input() card;
  constructor() { }

  ngOnInit(): void {
  }

}
