import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat',
  standalone: true
})
export class DateFormatPipe implements PipeTransform {

  transform(date: Date | null, ...args: unknown[]): unknown {
    if(!date) return null;

    const formattedDate = new Intl.DateTimeFormat('pt-PT').format(date);
    return formattedDate;
  }
}
