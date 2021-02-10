import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterMainSheetComponent } from './character-main-sheet.component';

describe('CharacterMainSheetComponent', () => {
  let component: CharacterMainSheetComponent;
  let fixture: ComponentFixture<CharacterMainSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterMainSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterMainSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
