import { Pipe, PipeTransform } from '@angular/core';
import {DiscountOffers}  from './SharedClassesAndTypes/Enum';
@Pipe({
  name: 'square'
})
export class SquarePipe implements PipeTransform {

  transform(value: DiscountOffers): string {
    switch(value) {
      case DiscountOffers.NoDiscount:
        return '0%';
      case DiscountOffers.TenPercent:
        return DiscountOffers.TenPercent;
      case DiscountOffers.FifteenPercent:
        return DiscountOffers.FifteenPercent;
      default:
        return '';
    }
  }
}
