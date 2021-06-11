import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'new-first-project';
  anchorStyle = {"color": 'red'};
  hrefValue = '/dashboard';
  canRenderParagraph = true;
  condition = false;
  dataFromChild = '';

  list = ["one", "two", "three"];

  dataToParent(dataFromChild) {
    console.log(dataFromChild);
    this.dataFromChild = dataFromChild;
  }
}
