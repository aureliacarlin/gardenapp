import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { HomePageComponent } from "./home-page/home-page.component";
import { FormsModule } from "@angular/forms";
import { AuthComponent } from "./auth/auth.component";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { ProductsPageComponent } from "./products-page/products-page.component";
import { PageProductService } from "./page-product.service";
import { AmdinPageComponent } from "./amdin-page/amdin-page.component";
import { AdminDeleteService } from "./admin-delete.service";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { AboutComponent } from "./about/about.component";

@NgModule({
  declarations: [
    AppComponent,
    ProductsPageComponent,
    AmdinPageComponent,
    NavBarComponent,
    AboutComponent,
    HomePageComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [PageProductService, AdminDeleteService],
  bootstrap: [AppComponent]
})
export class AppModule {}
