import { Component, OnInit } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {
  profileForm = new FormGroup(
    {
      name: new FormControl('', [Validators.required, Validators.minLength(5)]),
      email: new FormControl(
        '', 
        [Validators.required, Validators.minLength(5)],
        [this.emailExists()]
        )
    }
  )
  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    // console.log(this.name);
  }

  emailValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      console.log(this.profileForm);
      if(control.value.indexOf("@")>-1 && control.value.indexOf(".")>-1)
        return null;
      else 
        return {email: 'This field is not valid'}
    };
  }

  emailExists(): AsyncValidatorFn {
    return (control: AbstractControl): Promise<ValidationErrors| null> => {
      console.log(this.profileForm);
      return new Promise((resolve, reject)=>{
        setTimeout(() => {
          console.log("database result available, http response available")
          if(control.value=="abc@g.com")
            resolve(null);
          else 
            resolve({email: 'This email already exists'});
        }, 1000);
      })
    };
  }
}
