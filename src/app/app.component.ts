import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'first-project';
  second = 'second';
  third = 'third';
  isButtonDisabled = true;
  paragraphClass = 'font';
  inputValue='';
  inputValueSecond = '';

  inputValueKeydown(event) {
    console.log(event.target.value);
    this.inputValueSecond = event.target.value;
  }

  captureClick() {
    console.log("click");
    this.isButtonDisabled = !this.isButtonDisabled;
    this.paragraphClass= this.paragraphClass+' background';
    this.inputValue='captureClick';
  }
}
