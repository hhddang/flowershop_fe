import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FlowerPageComponent } from './pages/flower-page/flower-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { authGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'admin', component: AdminPageComponent, canActivate: [authGuard] },
  { path: 'home', component: HomePageComponent, canActivate: [authGuard] },
  {
    path: 'flower/:flowerId',
    component: FlowerPageComponent,
    canActivate: [authGuard],
  },
  { path: 'cart', component: CartPageComponent, canActivate: [authGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
