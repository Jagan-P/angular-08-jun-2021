import { ElementRef } from '@angular/core';
import { Directive } from '@angular/core';
// import { $ } from 'protractor';
declare var $:any;

@Directive({
  selector: '[appDatatable]'
})
export class DatatableDirective {

  constructor(
    private el: ElementRef
  ) { }

  ngOnInit() {
    console.log(this.el.nativeElement);
    console.log($(this.el.nativeElement));
    $(this.el.nativeElement).DataTable();
  }

}
