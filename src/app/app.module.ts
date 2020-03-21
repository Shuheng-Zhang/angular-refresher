import { PersonComponent, PersonInputComponent, PersonService } from './components';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    PersonInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
