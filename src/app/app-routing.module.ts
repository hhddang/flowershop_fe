import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FlowerPageComponent } from './pages/flower-page/flower-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'admin', component: AdminPageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'flower/:flowerId', component: FlowerPageComponent },
  { path: 'cart', component: CartPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
