import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.scss']
})
export class TemplateDrivenFormsComponent implements OnInit {
  name: string = '';
  email: string = '';

  @ViewChild("heroForm", {static: false}) formGroup;
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log(this.formGroup);
  }

}
