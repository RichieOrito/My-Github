import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any, args?: any[]): any {
    if ( value ) {
      const timeDifference = Math.abs((new Date().getTime() - new Date(value).getTime()) /1000);
      if (timeDifference < 29)
      return 'now';

      const times : any = {'year': 31536000, 'month': 2592000, 'week': 604800, 'day': 86400, 'hour': 3600, 'minute': 60, 'second': 1
    };
    let result;
    for (const i in times) {
      result = Math.trunc(timeDifference / times[i]);
      if (result > 0)
      if (result == 1) {
        return result + ' ' + i + 'ago';
      }else{
        return result + ' ' + i + 's ago'
      }

    }
    }
    return value;
  }

}
