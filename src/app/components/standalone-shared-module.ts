import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PipeModule } from '../pipes/pipe-module';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  imports: [
    CommonModule,
    PipeModule,
    TranslateModule
  ],
  providers: [],
  exports: [CommonModule, PipeModule, TranslateModule],
})
export class StandaloneSharedModule { }
