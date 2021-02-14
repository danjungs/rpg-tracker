import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { getQuickMenu, getCampain } from '../campanha.constants';

@Component({
  selector: 'app-campanha-details',
  templateUrl: './campanha-details.component.html',
  styleUrls: ['./campanha-details.component.scss']
})
export class CampanhaDetailsComponent implements OnInit {

  quickMenuContent
  campanha
  constructor(public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.quickMenuContent = getQuickMenu(id);
      this.campanha = getCampain(id)
      if( !this.quickMenuContent) {
        //TODO ERROR CHARACTER
      }
    })
  }

}
