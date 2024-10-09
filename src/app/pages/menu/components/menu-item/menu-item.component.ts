import { Component, Input, OnInit } from '@angular/core';

export interface Category {
  id: string,
  items: Item[]
}

export interface Item {
  id: string,
  price: string,
  img?: string
}

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  @Input() categories: Category[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
