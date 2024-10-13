import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

export interface Category {
  id: string,
  items: Item[],
  detail: boolean
}

export interface Item {
  id: string,
  price: string,
  img?: string,
  indisp?: boolean
}

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit, OnChanges {

  @Input() categories: Category[] = [];

  public filteredCategories: Category[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['categories']){
      this.filteredCategories = this.categories.filter(this.checkCategoryHasAvailableItems);
    }
  }

  private checkCategoryHasAvailableItems(category: Category){
    return category.items.some(( item ) => !item.indisp )
  }
}
