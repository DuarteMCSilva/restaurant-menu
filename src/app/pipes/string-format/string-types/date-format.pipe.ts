import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat',
  standalone: true
})
export class DateFormatPipe implements PipeTransform {

  transform(date: Date | null, ...args: unknown[]): string {
    if(!date) return '';

    const formattedDate = new Intl.DateTimeFormat('pt-PT').format(date);
    return formattedDate;
  }
}
