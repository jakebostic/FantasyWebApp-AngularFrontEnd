import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let arrObjects = value;
    let column = args;
    
    return arrObjects.sort((a, b) => {
      let result = 0;
      if(b[column] > a[column])
        result = 1;
      else if(b[column] < a[column])
        result = -1;
      return result;
    });
  }

}
