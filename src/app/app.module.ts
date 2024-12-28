import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MenuComponent } from './pages/menu/menu.component';
import { MenuItemComponent } from './pages/menu/components/menu-item/menu-item.component';
import { RouterModule, Routes } from '@angular/router';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { OptionalFieldTranslatePipe } from './pipes/app-translate.pipe';
import { LangPickerComponent } from './components/lang-picker/lang-picker.component';
import { ReservationsComponent } from './pages/reservations/reservations.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

const routes: Routes = [
  { path: '', component: MenuComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'reservations', component: ReservationsComponent },
  { path: '**', component: MenuComponent }
]

@NgModule({ declarations: [
        AppComponent,
        MenuComponent,
        MenuItemComponent,
        OptionalFieldTranslatePipe,
        LangPickerComponent,
        ReservationsComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        RouterModule.forRoot(routes),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
