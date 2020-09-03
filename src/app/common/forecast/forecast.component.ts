import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OpenweathermapService } from 'src/app/services/openweathermap.service';
import { IMessage } from 'src/app/models/openweathermap.models';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  urlImage: 'https://www.angulartraining.com/images/weather/clouds.png' | 'https://www.angulartraining.com/images/weather/sun.png' | 'https://www.angulartraining.com/images/weather/rain.png' | 'https://www.angulartraining.com/images/weather/snow.png' = null;

  constructor(private router: Router, private weatherService: OpenweathermapService, private route: ActivatedRoute) { }
  data:any;
  message:IMessage;
  zipcode:string;
  
  ngOnInit() {
    
    this.zipcode = this.route.snapshot.paramMap.get('zipcode');
        this.weatherService.getWeatherForecastByZipCode(this.zipcode).subscribe((response => {
          if(!!response){
            this.data = {...response}
          }else{
            this.message = {
              text:"Error: zipcode not found! Go back home!",
              type:"error"
            }
          }
          
          
        }
      ));
  }

  goToHomePage(){
    this.router.navigate([''])
  }

  calculateImg(data:string){
    var img:string = null;
    switch(data){
      case 'Clouds':
        img= 'https://www.angulartraining.com/images/weather/clouds.png';
        break;
      case 'Sun':
        img=  'https://www.angulartraining.com/images/weather/sun.png';
        break;
        case 'Clear':
        img=  'https://www.angulartraining.com/images/weather/sun.png';
        break;
      case 'Snow':
        img= 'https://www.angulartraining.com/images/weather/snow.png';
        break;
      case 'Rain':
        img=  'https://www.angulartraining.com/images/weather/rain.png';
        break;
    }
    return img ;
  }
}
