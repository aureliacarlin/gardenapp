import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
// import { HomeComponent } from '../app/app.component';



const routes: Routes = [
  // {
  //   path: "",
  //   component: HomeComponent
  // },
  {
    path: "about",
    component: AboutComponent
  },
  // {
  //   path: "products",
  //   component: ProductComponent
  // },
  // {
  //   path: "signin",
  //   component: SigninComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
