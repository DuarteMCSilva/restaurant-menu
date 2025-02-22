import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, signal } from '@angular/core';
import { ChipModule } from 'primeng/chip';
import { TimeFormatPipe } from 'src/app/pipes/string-format/string-types/time-format.pipe';
import { TranslateModule } from '@ngx-translate/core'; 

@Component({
  selector: 'app-time-picker',
  imports: [CommonModule, TranslateModule,  ChipModule, TimeFormatPipe],
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
}
