import { Directive, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[appHostListener]'
})
export class HostListenerDirective {

  constructor(
    private router: Router
  ) { }
  @HostListener('click', ['$event.target'])
  onClick(btn) {
    console.log('button click, redirecting');
    this.router.navigateByUrl("/dashboard");
  }
}
