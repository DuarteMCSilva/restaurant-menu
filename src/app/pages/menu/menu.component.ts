import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Item } from './components/menu-item/menu-item.component';

interface Category {
  id: string,
  img: string,
  categories?: Item[]
}

interface Response {
  categories: Category[]
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public categories$: Observable<Category[]> = new Observable()

  public categories: Category[] = [];

  public selectedCategory?: Category = undefined;

  constructor(private httpClient: HttpClient) {
    this.categories$ = this.httpClient.get<Response>('assets/config/menu-config.json')
      .pipe( map( (response) => response.categories) );
    this.categories$.subscribe( (categories) => this.categories = categories );
  }

  ngOnInit(): void {
    
  }

  selectCategory(categoryName: string) {
    if(categoryName === this.selectedCategory?.id) {
      this.selectedCategory = undefined;
      return
    }

    this.selectedCategory = this.categories.find( ( category ) => category.id === categoryName);
  }

}
