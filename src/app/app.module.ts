import { BrowserModule } from '@angular/platform-browser';

import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MenuComponent } from './pages/menu/menu.component';
import { MenuItemComponent } from './pages/menu/components/menu-item/menu-item.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { OptionalFieldTranslatePipe } from './pipes/app-translate.pipe';
import { LangPickerComponent } from './components/lang-picker/lang-picker.component';
import { ReservationsComponent } from './pages/reservations/reservations.component';
import { NgModule } from '@angular/core';
import { provideRouter, RouterLink, RouterLinkActive, RouterOutlet, Routes, withComponentInputBinding } from '@angular/router';
import { MatTimepickerModule } from '@angular/material/timepicker';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';
import { DatePickerModule } from 'primeng/datepicker';

// Angular Material Modules
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { TimePickerComponent } from "./components/time-picker/time-picker.component";
import { NumPickerComponent } from "./components/num-picker/num-picker.component";
import { StepperModule } from 'primeng/stepper';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

const appRoutes: Routes = [
  { path: '', component: MenuComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'reservations', component: ReservationsComponent },
  { path: '**', component: MenuComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MenuItemComponent,
    LangPickerComponent,
    ReservationsComponent
  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    }),
    FormsModule,
    MatTimepickerModule,
    InputGroupModule,
    InputGroupAddonModule,
    InputNumberModule,
    InputTextModule,
    SelectModule,
    DatePickerModule,
    RouterOutlet, RouterLink, RouterLinkActive,
    MatInputModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatIconModule,
    MatCardModule,
    DatePickerComponent,
    TimePickerComponent,
    OptionalFieldTranslatePipe,
    NumPickerComponent,
    StepperModule
],
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    provideRouter(appRoutes, withComponentInputBinding()),
    providePrimeNG({
      theme: {
        preset: Aura
      }
    }),
    provideAnimationsAsync()
  ]
})
export class AppModule { }
