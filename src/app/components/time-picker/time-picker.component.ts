import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, signal } from '@angular/core';
import { ChipModule } from 'primeng/chip';
import { TranslateModule } from '@ngx-translate/core'; 
import { StandaloneSharedModule } from '../standalone-shared-module';

@Component({
  selector: 'app-time-picker',
  imports: [CommonModule, TranslateModule,  ChipModule, StandaloneSharedModule],
  standalone: true,
  templateUrl: './time-picker.component.html',
  styleUrl: './time-picker.component.css'
})
export class TimePickerComponent implements OnChanges {

  @Input() schedule!: {
    [key: string] : number[]
  };

  @Output() readonly timeSelected: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  public shifts = signal<string[]>([]);

  ngOnChanges(changes: SimpleChanges) {
    if(changes['schedule']) {
      const shifts = Object.keys(this.schedule);
      if(shifts) {
        this.shifts.set(shifts);
      }
    }
  }

  onSelection(selected: number) {
    this.timeSelected.emit(selected);
  }

  trackByKey(_index: number, key: any) {
    return key
  }
}
