import { Component, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { DashboardComponent } from './dashboard/dashboard.component';

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
  @ViewChild(DashboardComponent, {static: false}) dashboardComponent;
  @ViewChildren(DashboardComponent) dashboardComponents: QueryList<any>;
  @ViewChild(AdminDashboardComponent, {static: false}) adminDashboardComponent: AdminDashboardComponent;
  showTemplate = true;

  list = ["one", "two", "three", "four", "five", "six"];

  ngOnInit() {
    setTimeout(() => {
      this.dataToChild = 'some new text';
    }, 5000);
    // document.getElementById("unique").style.display="none";
    console.log("templateRef",this.templateRef);
    console.log("dashboardComponent", this.dashboardComponent);
  }

  ngAfterViewInit() {
    console.log("dashboardComponent", this.dashboardComponent);
    // console.log("dashboardComponent",this.dashboardComponent.templateRef.nativeElement);
    console.log("dashboardComponents", this.dashboardComponents);
    this.dashboardComponents.changes.subscribe((data)=>{
      console.log("dashboardComponent changed",data);
    })

    // this.adminDashboardComponent.dataToParent.subscribe((data)=>{
    //   console.log("dataToParent", data);
    // })
  }

  dataToParent(dataFromChild) {
    console.log(dataFromChild);
    this.dataFromChild = dataFromChild;
  }
}
