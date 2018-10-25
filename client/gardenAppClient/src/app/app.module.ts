import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { PageProductService } from './page-product.service';
import { AmdinPageComponent } from './amdin-page/amdin-page.component';
import { AdminDeleteService } from './admin-delete.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductsPageComponent,
    AmdinPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    PageProductService,
    AdminDeleteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
