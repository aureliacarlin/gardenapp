import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { HomePageComponent } from "../app/home-page/home-page.component";
import { AuthComponent } from ".//auth/auth.component";
import { ProductsPageComponent } from "./products-page/products-page.component";
import { AmdinPageComponent } from "./amdin-page/amdin-page.component";

const routes: Routes = [
  {
    path: "home",
    component: HomePageComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "products",
    component: ProductsPageComponent
  },
  {
    path: "admin",
    component: AuthComponent
  },
  {
    path: "admin-prod",
    component: AmdinPageComponent
  }
  // {
  //   path: "auth",
  //   component: AuthComponent
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
