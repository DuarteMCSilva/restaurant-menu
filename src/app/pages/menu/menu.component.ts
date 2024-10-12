import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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
  styleUrls: ['./menu.component.css']
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
  }

  changeLang(lang: string) {
      this.translateService.use(lang);
  }
}
