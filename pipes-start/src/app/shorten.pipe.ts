import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'shorten'
})
export class ShortenPipe implements PipeTransform{
    transform(value: string, len:number) {
        return value.substring(0,len)
    }

}