import { Component, ViewChild } from '@angular/core';

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
  dataToChild = 'some text';
  @ViewChild("templateRef", {static: true}) templateRef;

  list = ["one", "two", "three"];

  ngOnInit() {
    setTimeout(() => {
      this.dataToChild = 'some new text';
    }, 5000);
    // document.getElementById("unique").style.display="none";
    console.log("templateRef",this.templateRef);
  }

  dataToParent(dataFromChild) {
    console.log(dataFromChild);
    this.dataFromChild = dataFromChild;
  }
}
