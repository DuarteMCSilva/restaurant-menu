import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent {
  title = 'menu-app';

  constructor(private translateService: TranslateService) {
    this.translateService.addLangs(['pt', 'en' , 'de', 'es', 'fr']);
    this.translateService.setDefaultLang('pt');
    this.translateService.use('pt')
  }
}
