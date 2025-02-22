import { NgModule } from '@angular/core';
import { DateFormatPipe } from './string-format/string-types/date-format.pipe';
import { TimeFormatPipe } from './string-format/string-types/time-format.pipe';
import { StringFormatPipe } from './string-format/string-format.pipe';


@NgModule({
    imports: [
        DateFormatPipe,
        TimeFormatPipe,
        StringFormatPipe
    ],
    providers: [DateFormatPipe, TimeFormatPipe],
    exports: [DateFormatPipe, TimeFormatPipe, StringFormatPipe],
})
export class PipeModule { }
