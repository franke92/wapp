import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { OpenweathermapService } from 'src/app/services/openweathermap.service';
import { MinLengthValidator } from '@angular/forms';


@Component({
  selector: 'app-location-box',
  templateUrl: './location-box.component.html',
  styleUrls: ['./location-box.component.css']
})
export class LocationBoxComponent implements OnInit {

  /**@internal */
  zipcode:string = null;

  @Output() onNext: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  get addButton():boolean {
    return (this.zipcode == null || this.zipcode =='' && this.minimumLength(this.zipcode)) ;
  }

  minimumLength(string:string):boolean{
    if(string && string.length > 4)
    return true;
    else 
    return false;
  }

  
  onClick(e:Event){
    this.onNext.emit(this.zipcode);
  }

}
