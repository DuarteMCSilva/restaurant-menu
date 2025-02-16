import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ChipModule } from 'primeng/chip';

@Component({
  selector: 'app-num-picker',
  imports: [CommonModule, ChipModule, TranslateModule],
  standalone: true,
  templateUrl: './num-picker.component.html',
  styleUrl: './num-picker.component.css'
})
export class NumPickerComponent {

  @Output() readonly numberSelected: EventEmitter<number> = new EventEmitter<number>();

  numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14 ];

  onSelection(selected: number) {
    this.numberSelected.emit(selected);
  }

}
