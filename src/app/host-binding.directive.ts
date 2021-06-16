import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHostBinding]'
})
export class HostBindingDirective {

  constructor() { }
  @HostBinding('class.valid') get valid() { return true; }
  @HostBinding('class.invalid') get invalid() { return false; }
  @HostBinding('disabled') get disabled() { return false; }
}
