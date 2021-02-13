import { Component, OnInit, Input } from '@angular/core';
import { QuickMenuInterface } from 'src/app/interface/campanha.interface';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-quick-menu',
  templateUrl: './quick-menu.component.html',
  styleUrls: ['./quick-menu.component.scss']
})
export class QuickMenuComponent implements OnInit {
  @Input() quickmenuContent: QuickMenuInterface;
  constructor(private viewportScroller: ViewportScroller) { }

  ngOnInit(): void {
  }
  expandquickmenu(item) {
    this.quickmenuContent.options.forEach((el) => {
      if (item === el) {
        el.open = !el.open;
      } else {
        el.open = false;
      }
      return el;
    });
  }
  scrollToTag(id) {
    this.viewportScroller.setOffset([0,100])
    this.viewportScroller.scrollToAnchor(id);
    console.log('aaaa', id)
  }
  scroollAndExpandquickmenu(item) {
    this.expandquickmenu(item);
    this.scrollToTag(item.tag)
  }
}
