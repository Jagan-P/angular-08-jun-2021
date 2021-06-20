import { Component, Directive, Input, OnInit, ViewChild } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[emailValidators]',
  providers: [{provide: NG_VALIDATORS, useExisting: EmailValidatorDirective, multi: true}]
})
export class EmailValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    console.log(control);
    if(control.value && control.value.indexOf("@")>-1 && control.value.indexOf(".")>-1)
      return null;
    else 
      return {email: 'This field is not valid'}
  }
}

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.scss']
})
export class TemplateDrivenFormsComponent implements OnInit {
  name: string = '';
  email: string = '';
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

}
