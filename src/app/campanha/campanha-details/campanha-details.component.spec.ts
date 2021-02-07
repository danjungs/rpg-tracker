import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampanhaDetailsComponent } from './campanha-details.component';

describe('CampanhaDetailsComponent', () => {
  let component: CampanhaDetailsComponent;
  let fixture: ComponentFixture<CampanhaDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampanhaDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampanhaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
