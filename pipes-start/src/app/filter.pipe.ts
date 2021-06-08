import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value:any, status:string,propname:string) {
    const serverFiltered =[]
    if(status==='' || value.length===0){
      return value;
    }
    for(let server of value){
      if(server[propname]===status){
        serverFiltered.push(server)
      }
    }
    return serverFiltered;
  }

}
