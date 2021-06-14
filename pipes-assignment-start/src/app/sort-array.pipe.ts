import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortArray'
})
export class SortArrayPipe implements PipeTransform {

  transform(value: {name:string,instanceType:string,status:string,started:Date}[]): unknown {
    return value.sort((a,b) => a.name.localeCompare(b.name))
  }

}
