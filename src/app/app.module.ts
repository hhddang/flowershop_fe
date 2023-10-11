import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FlowerPageComponent } from './pages/flower-page/flower-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { NgIconsModule } from '@ng-icons/core';
import {
  bootstrapCart4,
  bootstrapPerson,
  bootstrapSearch,
  bootstrapFacebook,
  bootstrapInstagram,
  bootstrapTwitter,
} from '@ng-icons/bootstrap-icons';
import { HttpClientModule } from '@angular/common/http';
import { FlowerCardComponent } from './components/flower-card/flower-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    FooterComponent,
    FlowerPageComponent,
    LoginPageComponent,
    AdminPageComponent,
    CartPageComponent,
    FlowerCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgIconsModule.withIcons({
      bootstrapPerson,
      bootstrapCart4,
      bootstrapSearch,
      bootstrapFacebook,
      bootstrapInstagram,
      bootstrapTwitter,
    }),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
