import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inqooUpAndLow'
})
export class InqooUpAndLowPipe implements PipeTransform {
value2 : string = '';
  transform(value: string): string {
    console.log('value: ', value);
    
    for(let i = 0; i < value.length; i++){
      if(i % 2 == 0){
        this.value2 += value.charAt(i).toUpperCase();
      }
      else{this.value2 += value.charAt(i);}
    }

    return this.value2;
  }

}
