import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceAwith0'
})
export class ReplaceAwith0Pipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    console.log(value);
    value = value.replace("A", "0");
    return value;
  }

}


@Pipe({
  name: 'flyingHeroes'
})
export class FlyingHeroesPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    console.log(value);
    return value.filter(hero => hero.canFly);;
  }

}
