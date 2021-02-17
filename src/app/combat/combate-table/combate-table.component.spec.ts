import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CombateTableComponent } from './combate-table.component';

describe('CombateTableComponent', () => {
  let component: CombateTableComponent;
  let fixture: ComponentFixture<CombateTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CombateTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CombateTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
