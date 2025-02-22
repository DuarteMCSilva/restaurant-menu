import { Pipe, PipeTransform } from '@angular/core';
import { DateFormatPipe } from './string-types/date-format.pipe';
import { TimeFormatPipe } from './string-types/time-format.pipe';

@Pipe({
  name: 'stringFormat',
  standalone: true
})
export class StringFormatPipe implements PipeTransform {

  constructor(
    private dateFormatPipe: DateFormatPipe,
    private timeFormatPipe: TimeFormatPipe
  ) { }

  transform(value: any, opts?: any): string {
    if( opts?.format === 'date'){
      return this.dateFormatPipe.transform(value);
    }

    if( opts?.format === 'time'){
      return this.timeFormatPipe.transform(value);
    }

    if( opts?.format === 'number'){
      return value;
    }

    if( opts?.format === 'none'){
      return '';
    }

    return value;
  }

}
