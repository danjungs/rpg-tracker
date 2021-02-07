import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampanhaHomeComponent } from './campanha-home.component';

describe('CampanhaHomeComponent', () => {
  let component: CampanhaHomeComponent;
  let fixture: ComponentFixture<CampanhaHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampanhaHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampanhaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
