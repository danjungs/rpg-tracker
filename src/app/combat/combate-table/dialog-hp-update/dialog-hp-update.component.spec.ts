import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogHPUpdateComponent } from './dialog-hp-update.component';

describe('DialogHPUpdateComponent', () => {
  let component: DialogHPUpdateComponent;
  let fixture: ComponentFixture<DialogHPUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogHPUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogHPUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
