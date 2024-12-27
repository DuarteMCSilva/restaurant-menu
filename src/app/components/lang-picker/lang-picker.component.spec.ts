import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LangPickerComponent } from './lang-picker.component';

describe('LangPickerComponent', () => {
  let component: LangPickerComponent;
  let fixture: ComponentFixture<LangPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LangPickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LangPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
