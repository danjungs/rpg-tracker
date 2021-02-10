import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonstersTableComponent } from './monsters-table.component';

describe('MonstersTableComponent', () => {
  let component: MonstersTableComponent;
  let fixture: ComponentFixture<MonstersTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonstersTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonstersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
