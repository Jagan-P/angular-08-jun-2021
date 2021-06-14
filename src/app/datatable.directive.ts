import { ElementRef, Input } from '@angular/core';
import { Directive } from '@angular/core';
// import { $ } from 'protractor';
declare var $:any;

@Directive({
  selector: '[appDatatable]'
})
export class DatatableDirective {
  @Input() inputValue = '';
  dataTableInstance;

  constructor(
    private el: ElementRef
  ) { }

  ngOnChanges(SimpleChanges) {
    console.log("ngOnChanges", SimpleChanges);
    if(SimpleChanges.inputValue && SimpleChanges.inputValue.currentValue) {
      this.search(SimpleChanges.inputValue.currentValue);
    }
  }

  ngOnInit() {
    console.log(this.el.nativeElement);
    console.log($(this.el.nativeElement));
    this.dataTableInstance = $(this.el.nativeElement).DataTable();
    // console.log("jagan",document.getElementById("jagan"));
    // this.search();
  }

  search(input) {
    this.dataTableInstance.search(input).draw();
  }

}
