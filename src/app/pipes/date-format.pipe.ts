import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe extends DatePipe implements PipeTransform {
  transform(value: any): any {
    let date = new Date(value*1000)
    return super.transform(date, 'dd/MMM/yyyy');
  }

}
