import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeFormat',
  standalone: true
})
export class TimeFormatPipe implements PipeTransform {

  /**
   * 
   * @param value 
   * @param args 
   * @returns 
   */
  transform(value: number, format: string = 'hour-min'): string {

    const numberStr = value + '';

    if(format === 'hour-min') {
      return numberStr.slice(0, 2) + ':' + numberStr.slice(2,4);
    }
    return 'date-format-not-defined';
  }

}
