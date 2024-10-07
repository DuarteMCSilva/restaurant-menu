import { Component, Input, OnInit } from '@angular/core';

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

  @Input() items: Item[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
