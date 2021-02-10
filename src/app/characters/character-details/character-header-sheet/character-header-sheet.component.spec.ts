import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSheetComponent } from './character-header-sheet.component';

describe('HeaderSheetComponent', () => {
  let component: HeaderSheetComponent;
  let fixture: ComponentFixture<HeaderSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
