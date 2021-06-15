import { Component, OnInit, ViewChild } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  condition = false;
  inputValue='';
  @ViewChild("templateRef", {static: true}) templateRef: HTMLElement;

  constructor() { }

  ngOnInit() {
    // console.log("jagan",document.getElementById("jagan"));
    document.getElementById("jagan").style.display="none";
    console.log("templateRef",this.templateRef);
  }

  ngAfterViewInit() {
    console.log("templateRef",this.templateRef);
  }

  ngDoCheck() {
    console.log("ngDoCheck");
  }

  valueChange($event) {
    // console.log($event.target.value);
    this.inputValue = $event.target.value;
  }

  toggleTable() {
    this.condition = !this.condition;
  }
}
