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

  list = ["one", "two", "three"];
}
