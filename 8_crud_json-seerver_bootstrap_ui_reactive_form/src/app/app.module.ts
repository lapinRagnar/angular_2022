import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeDashboardComponent } from './components/employe-dashboard/employe-dashboard.component';
import { NavbarComponent } from './components/employe-dashboard/navbar/navbar.component';
import { ContenuComponent } from './components/employe-dashboard/contenu/contenu.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeDashboardComponent,
    NavbarComponent,
    ContenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
