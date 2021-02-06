import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonstersHomeComponent } from './monsters-home.component';

describe('MonstersHomeComponent', () => {
  let component: MonstersHomeComponent;
  let fixture: ComponentFixture<MonstersHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonstersHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonstersHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
