import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { StandaloneSharedModule } from '../standalone-shared-module';

export interface MenuItem {
  label?: string,
  icon?: string,
  routerLink?: string,
  format: string,
  value?: any
}

@Component({
  selector: 'app-breadcrumb',
  imports: [ BreadcrumbModule, StandaloneSharedModule ],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss'
})
export class BreadcrumbComponent {
  @Input() items?: MenuItem[];

  home: MenuItem | undefined;

  @Input() selectedIndex: number = 0;
  selectedLabel?: string;

  @Output() onSelection = new EventEmitter();

  ngOnInit() {
      this.home = undefined
  }

  ngOnChanges(changes: SimpleChanges) {
    if ( changes['selectedIndex'] ) {
      this.selectedLabel = this.items![this.selectedIndex!].label ?? '';
    }
  }

  onItemClick(label: string) {
    this.selectItem(label);
  }

  private selectItem(label: string): void {
    const index = this.items?.findIndex( (item) => item.label === label ) ?? 0;
    const isItemClickable = this.items![Math.max(index-1, 0)]?.value != undefined;
    
    if( !isItemClickable ) {
      return
    }
    
    this.selectedLabel = label;
    this.selectedIndex = index;
    this.onSelection.emit(index);
  }
}
