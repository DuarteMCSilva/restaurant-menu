import { Component, EventEmitter, model, Output } from '@angular/core';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { CalendarHeaderComponent } from './calendar-header/calendar-header.component';
import { DateFormatPipe } from 'src/app/pipes/string-format/string-types/date-format.pipe';

@Component({
  selector: 'app-date-picker',
  standalone: true,
  imports: [MatDatepickerModule, CalendarHeaderComponent, DateFormatPipe],
  templateUrl: './date-picker.component.html',
  styleUrl: './date-picker.component.css'
})
export class DatePickerComponent {

  public calendarHeaderComponent = CalendarHeaderComponent;

  public readonly CURRENT_DATE = new Date();

  public max_date;

  @Output() readonly dateSelected: EventEmitter<Date> = new EventEmitter<Date>();

  constructor() {
    this.max_date = this.setMaxDate();
  }
  
  public dateFilter = (date: Date) => {

    if(this.isExceptionallyClosed()) return false;

    if(this.isExceptionallyOpen()) return true;

    return !this.isFolga(date);
  }

  selected = model<Date | null>(null);

  private isExceptionallyOpen() {
    return false;
  }

  private isExceptionallyClosed() {
    return false;
  }

  public isFolga(date: Date) {
    const dayOfWeek = date.getDay();
    const isFolga = dayOfWeek === 2;
    return isFolga;
  }

  private setMaxDate() {
    const max_date = new Date(this.CURRENT_DATE);
    max_date.setMonth( max_date.getMonth() + 2)
    return max_date;
  }

  onSelected(date: any) {
    this.dateSelected.emit(date)
  }
}
