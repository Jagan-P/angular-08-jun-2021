import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {
  name = new FormControl('', [Validators.required, Validators.minLength(5)]);
  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    console.log(this.name);
  }
}
