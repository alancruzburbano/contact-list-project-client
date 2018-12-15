import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'findby'
})
export class FindbyPipe implements PipeTransform {

  transform(value: any, args?: any): any {    
    if(!args){
      return value;
    }
    return value.filter(items=>{
      return items.name.toUpperCase().includes(args.toUpperCase())==true
    })
  }
}
