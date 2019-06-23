import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'units'
})
export class UnitsPipe implements PipeTransform {

  transform(value: number, measure: string = "Units"): string {
    return value > 0 ? `${value} ${measure}` : "No Stock"
  }

}
