import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IWeatherItem } from 'src/app/models/openweathermap.models';

@Component({
  selector: 'app-weather-box',
  templateUrl: './weather-box.component.html',
  styleUrls: ['./weather-box.component.css']
})
export class WeatherBoxComponent implements OnInit {

  @Input() data: IWeatherItem;
  @Input() index:number;

  @Output('onClose') onCloseNext:EventEmitter<string> = new EventEmitter<string>();

  urlImage: 'https://www.angulartraining.com/images/weather/clouds.png' | 'https://www.angulartraining.com/images/weather/sun.png' | 'https://www.angulartraining.com/images/weather/rain.png' | 'https://www.angulartraining.com/images/weather/snow.png' = null;
  constructor(private router: Router) { }

  ngOnInit() {
    console.log(this.data)
    switch(this.data.condition){
      case 'Clouds':
        this.urlImage = 'https://www.angulartraining.com/images/weather/clouds.png';
        break;
      case 'Sun':
        this.urlImage = 'https://www.angulartraining.com/images/weather/sun.png';
        break;
        case 'Clear':
        this.urlImage = 'https://www.angulartraining.com/images/weather/sun.png';
        break;
      case 'Snow':
        this.urlImage = 'https://www.angulartraining.com/images/weather/snow.png';
        break;
      case 'Rain':
        this.urlImage = 'https://www.angulartraining.com/images/weather/rain.png';
        break;
      default:
        this.urlImage = 'https://www.angulartraining.com/images/weather/clouds.png';
        break;
    }

  }

  onClose(e:Event):void{
    console.log("close");
    this.onCloseNext.emit(this.data.zipcode);
  }

  goToForecastPage():void{
    const url = "/forecast";
    this.router.navigate([url, this.data.zipcode])
  }
}
