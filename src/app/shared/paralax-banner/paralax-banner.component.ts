import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-paralax-banner',
  templateUrl: './paralax-banner.component.html',
  styleUrls: ['./paralax-banner.component.scss']
})
export class ParalaxBannerComponent implements OnInit {

  constructor() { }
  @Input() data;
  ngOnInit(): void {
  }

}
