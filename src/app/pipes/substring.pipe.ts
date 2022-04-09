import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'substring'
})
export class SubstringPipe implements PipeTransform {

  transform(value: string, maxlength = 100): string {
    if (value.length > maxlength)
      return `${value.substring(0, maxlength - 3)}...`;
      // return value.substring(0, maxlength - 3) + "...";

    return value;
  }

}
