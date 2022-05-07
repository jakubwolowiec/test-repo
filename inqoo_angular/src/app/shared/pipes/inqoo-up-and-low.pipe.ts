import { Pipe, PipeTransform } from '@angular/core';
import {LowerCasePipe, UpperCasePipe} from "@angular/common";

@Pipe({
  name: 'inqooUpAndLow'
})
export class InqooUpAndLowPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    const upper = new UpperCasePipe();
    const lower = new LowerCasePipe();

    const upperAndLower = (value: string, index: number): string =>
      index % 2 === 0 ? upper.transform(value) : lower.transform(value)

    return value.split('').map((v, i) => upperAndLower(v, i)).join('');
  }

}
