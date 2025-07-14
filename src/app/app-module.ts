import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { CarBaseComponent } from './car-base/car-base.component';
import { CarBaseModule } from './car-base/car-base.module';
import { FormsModule } from '@angular/forms';
import { CarFormComponent } from './car-base/car-form/car-form.component';

@NgModule({
  declarations: [
    App
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarBaseComponent,
    CarFormComponent,
    CarBaseModule,
],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
