import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PipeModule } from '../pipes/pipe-module';


@NgModule({
  imports: [ CommonModule, PipeModule ],
  providers: [],
  exports: [ CommonModule, PipeModule ],
})
export class StandaloneSharedModule { }
