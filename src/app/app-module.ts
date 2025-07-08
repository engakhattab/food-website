import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './components/header/header';
import { Home } from './components/home/home';
import { Search } from './components/search/search';
import { FormsModule } from '@angular/forms';
import { Tags } from './components/tags/tags';
import { FoodPage } from './components/food-page/food-page';
import { CartPage } from './components/cart-page/cart-page';

@NgModule({
  declarations: [
    App,
    Header,
    Home,
    Search,
    Tags,
    FoodPage,
    CartPage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
