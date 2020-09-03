import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './common/home/home.component';
import { WeatherBoxComponent } from './common/weather-box/weather-box.component';
import { LocationBoxComponent } from './common/location-box/location-box.component';
import { ForecastComponent } from './common/forecast/forecast.component';
import { MessageBoxComponent } from './common/message-box/message-box.component';
import { DateFormatPipe } from './pipes/date-format.pipe';
import { TemperatureConverterPipe } from './pipes/temperature-converter.pipe';
import {HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WeatherBoxComponent,
    LocationBoxComponent,
    ForecastComponent,
    MessageBoxComponent,
    DateFormatPipe,
    TemperatureConverterPipe
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
