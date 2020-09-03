import { Injectable } from '@angular/core';
import { HttpParams, HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable, of,  } from 'rxjs';
import { catchError  } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})


export class OpenweathermapService {

  apiUrl:string = "http://api.openweathermap.org/data/2.5/weather";//can be in a constant file
 
  apiUrlForecast:string ="http://api.openweathermap.org/data/2.5/forecast/daily"//can be in a constant file
  apiKey:string = "5a4b2d457ecbef9eb2a71e480b947604"//can be in a constant file
  constructor(private http : HttpClient) {
    
   }

  public getWeatherTodayByZipCode(zipcode:string):Observable<any>{
    const url: string = this.apiUrl;
    let zip:string = zipcode + ",it";//can be in a constant file
    let params: HttpParams = new HttpParams();
      params = params.append("zip", zip);
      params = params.append("appid", this.apiKey);
        const req$: Observable<any> = this.http.get<any>(url, {params});
        return req$.pipe(
            catchError((error: HttpErrorResponse) => {
                if (error.status == 404) {
                   console.error("errore zipcode non valido") 
                   return of(null);
                }
            })
        );
  }
  public getWeatherForecastByZipCode(zipcode:string):Observable<any>{
    const url: string = this.apiUrlForecast;
    let params: HttpParams = new HttpParams();
    let zip:string = zipcode + ",it";//can be in a constant file
      params = params.append("zip", zip);
      params = params.append("appid", this.apiKey);
        const req$: Observable<any> = this.http.get<any>(url, {params});
        return req$.pipe(
            catchError((error: HttpErrorResponse) => {
              if (error.status == 404) {
                console.error("errore zipcode non valido") 
                return of(null);
             }
            })
        );
  }

}
