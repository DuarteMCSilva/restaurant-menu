import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MenuComponent } from './pages/menu/menu.component';
import { MenuItemComponent } from './pages/menu/components/menu-item/menu-item.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: MenuComponent },
  { path: 'menu', component: MenuComponent },
  { path: '**', component: MenuComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MenuItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
