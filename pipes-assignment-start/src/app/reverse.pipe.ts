import { stringify } from '@angular/compiler/src/util';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: string): unknown {
    const reverseArray = value.split('').reverse();
    let str =''
    for(let char of reverseArray){
      str+=char
    }
    return str
  }

}
