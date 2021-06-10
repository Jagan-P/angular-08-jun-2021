import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBackgroundDirective]'
})
export class BackgroundDirectiveDirective {

  constructor(
  private el: ElementRef
  ) { 
    console.log(this.el);
    this.el.nativeElement.style.color = "blue";
  }

}
