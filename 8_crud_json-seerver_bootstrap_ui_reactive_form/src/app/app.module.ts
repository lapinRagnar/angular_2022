import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeDashboardComponent } from './components/employe-dashboard/employe-dashboard.component';
import { NavbarComponent } from './components/employe-dashboard/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeDashboardComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
