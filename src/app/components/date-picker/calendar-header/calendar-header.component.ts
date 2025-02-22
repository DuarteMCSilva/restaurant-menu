import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCalendar, MatCalendarHeader } from '@angular/material/datepicker';

@Component({
  selector: 'app-calendar-header',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './calendar-header.component.html',
  styleUrl: './calendar-header.component.css'
})
export class CalendarHeaderComponent extends MatCalendarHeader<Date> {

  @Input() monthOnDisplay: string = '';

  calendarHeader = new MatCalendarHeader()

  constructor(
    override calendar: MatCalendar<Date>
  
  ) {
    super(calendar);
  }
}
