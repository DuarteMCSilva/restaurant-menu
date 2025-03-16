import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-lang-picker',
    templateUrl: './lang-picker.component.html',
    styleUrls: ['./lang-picker.component.css'],
    standalone: false
})
export class LangPickerComponent implements OnInit {

  @Input() inline = false;
  currLang = 'pt';

  constructor(public translateService: TranslateService) { }

  ngOnInit(): void {
    this.currLang = this.translateService.currentLang;
  }

  changeLang(lang: string) {
    this.currLang = lang;
    this.translateService.use(lang);
  }

  trackLang(_index: number, lang:string){
    return lang;
  }
}
