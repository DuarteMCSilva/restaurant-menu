import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Category } from './components/menu-item/menu-item.component';
import { TranslateService } from '@ngx-translate/core';

interface ProductFamily {
  id: string,
  img: string,
  categories?: Category[]
}

interface Response {
  families: ProductFamily[]
}

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css'],
    standalone: false
})
export class MenuComponent implements OnInit {

  public productFamilies$: Observable<ProductFamily[]> = new Observable();

  public productFamilies: ProductFamily[] = [];

  public selectedFamily?: ProductFamily = undefined;

  constructor(
    private httpClient: HttpClient,
    public translateService: TranslateService) {
    this.productFamilies$ = this.httpClient.get<Response>('assets/config/menu-config.json')
      .pipe( map( (response) => response.families) );
    this.productFamilies$.subscribe( (categories) => this.productFamilies = categories );
  }

  ngOnInit(): void { }

  selectCategory(categoryName: string) {
      if(categoryName === this.selectedFamily?.id) {
        this.selectedFamily = undefined;
        return
      }

      this.selectedFamily = this.productFamilies.find( ( category ) => category.id === categoryName);
      this.scrollElementIntoView('menu-elements')
  }

  trackById(_index: number, item: ProductFamily) {
    return item.id;
  }

  private scrollElementIntoView(label: string) {
    // Should wait for Change Detection, and conditional element (*ngIf) to render
    // setTimeout does the trick.
    setTimeout( () => {
      const element = document.getElementById(label);
      element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 0);
  }
}
