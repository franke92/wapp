import { Component, OnInit, Input } from '@angular/core';
import { IMessage } from 'src/app/models/openweathermap.models';

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.css']
})
export class MessageBoxComponent implements OnInit {

  @Input() message:IMessage ;
  constructor() { }

  ngOnInit() {
  }

}
