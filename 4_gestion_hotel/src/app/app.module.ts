import { HttpClientModule } from '@angular/common/http';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { ReplaceComma } from './shared/pipes/replace-comma.pipe';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotelListComponent } from './components/hotel-list/hotel-list.component';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { HomeComponent } from './pages/home/home.component';
import { HotelDetailComponent } from './components/hotel-list/hotel-detail/hotel-detail.component'

registerLocaleData(localeFr, 'fr')

@NgModule({
  declarations: [
    AppComponent,
    HotelListComponent,
    ReplaceComma,
    StarRatingComponent,
    HomeComponent,
    HotelDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
