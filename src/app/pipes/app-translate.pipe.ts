import { ChangeDetectorRef, Pipe } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Pipe({
    name: 'optTranslate',
    standalone: true
})
export class OptionalFieldTranslatePipe extends TranslatePipe {

    constructor(
      private translateService: TranslateService,
      private changeDetectorRef: ChangeDetectorRef  
    ) {
      super(translateService, changeDetectorRef);
    }
  
    override transform(value: string, ...args: any[]): string | undefined {
        let translation = super.transform(value, ...args);

        if (translation === value) {
          return undefined;
        }

        return translation;
    }
}
