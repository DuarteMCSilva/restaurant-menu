import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-lang-picker',
    templateUrl: './lang-picker.component.html',
    styleUrls: ['./lang-picker.component.css'],
    standalone: false
})
export class LangPickerComponent implements OnInit {

  constructor(public translateService: TranslateService) { }

  ngOnInit(): void {
  }

  changeLang(lang: string) {
    this.translateService.use(lang);
  }

  trackLang(_index: number, lang:string){
    return lang;
  }
}
