import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumPickerComponent } from './num-picker.component';

describe('NumPickerComponent', () => {
  let component: NumPickerComponent;
  let fixture: ComponentFixture<NumPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumPickerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
