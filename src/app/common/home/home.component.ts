import { Component, OnInit, ViewChild } from '@angular/core';
import { OpenweathermapService } from 'src/app/services/openweathermap.service';
import { IMessage, IWeatherItem } from 'src/app/models/openweathermap.models';
import { LocationBoxComponent } from '../location-box/location-box.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  weatherData: any = [];
  zipCodeList: Array<string> = new Array<string>();
  zipcode: string = null;
  message: IMessage = null;

  @ViewChild('mylocationbox', { static: true }) mylocationbox: LocationBoxComponent;

  constructor(private weatherService: OpenweathermapService) { }

  ngOnInit() {
    console.log(localStorage.getItem('zipcodes'))
    if (!!localStorage.getItem('zipcodes')) {
      this.zipCodeList = JSON.parse(localStorage.getItem('zipcodes'));
    }
    if (this.zipCodeList.length > 0) {
      this.zipCodeList.forEach((element) => {
        this.weatherService.getWeatherTodayByZipCode(element).subscribe(
          response => {
            let weatherItem: IWeatherItem = {
              zipcode: element,
              city: response.name,
              condition: response.weather[0].main,
              currentTemp: response.main.temp,
              tempMax: response.main.temp_max,
              tempMin: response.main.temp_min
            }
            this.weatherData.push(weatherItem);
          }

        )
      }
      )
    }
  }

  next(e: any): void {
    console.log("data", e);
    this.message = null;

    if (!!localStorage.getItem('zipcodes')) {
      this.zipCodeList = JSON.parse(localStorage.getItem('zipcodes'));
    }
    if (!this.zipCodeList.includes(e)) {


      this.weatherService.getWeatherTodayByZipCode(e).subscribe((
        response => {
          if (!!response) {
            this.zipcode = e;
            this.zipCodeList.push(e);
            localStorage.setItem("zipcodes", JSON.stringify(this.zipCodeList));
            let weatherItem: IWeatherItem = {
              zipcode: e,
              city: response.name,
              condition: response.weather[0].main,
              currentTemp: response.main.temp,
              tempMax: response.main.temp_max,
              tempMin: response.main.temp_min
            }
            this.weatherData.push(weatherItem);
          } else {

            this.message = {
              text: "Error : zipcode "+e+" not found! Retry",
              type: 'error'
            }
            this.mylocationbox.zipcode = null;
          }

        }
      ))

    }else {
      
      this.message = {
        text: "Warning : zipcode "+e+" already found!",
        type: 'warning'
      }
      this.mylocationbox.zipcode = null;
    }





  }

  closeWeatherBox(e: any): void {
    this.message = {
      type: 'success',
      text:"Zipcode "+e+" succesfully deleted!"
    }
    this.weatherData = this.weatherData.filter((item: IWeatherItem) => (item.zipcode != e));
    this.zipCodeList = this.zipCodeList.filter((zipcode: string) => zipcode != e);
    console.log(this.weatherData);
    console.log(this.zipCodeList);
    //update localstorage
    localStorage.setItem('zipcodes', JSON.stringify(this.zipCodeList))
  }
}
