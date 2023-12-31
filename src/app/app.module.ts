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
  bootstrapTrash,
  bootstrapPlus,
  bootstrapDoorOpen,
} from '@ng-icons/bootstrap-icons';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FlowerCardComponent } from './components/flower-card/flower-card.component';
import { FormsModule } from '@angular/forms';
import { QuantityBoxComponent } from './components/quantity-box/quantity-box.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminFlowerCardComponent } from './components/admin-flower-card/admin-flower-card.component';
import { InterceptorService } from './services/interceptor/interceptor.service';

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
    QuantityBoxComponent,
    AdminFlowerCardComponent,
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
      bootstrapTrash,
      bootstrapPlus,
      bootstrapDoorOpen,
    }),
    HttpClientModule,
    FormsModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
