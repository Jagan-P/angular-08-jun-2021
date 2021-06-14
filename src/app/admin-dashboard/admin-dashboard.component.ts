import { Component, Input, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class AdminDashboardComponent implements OnInit {
  @Input() dataToChild: string="";

  @Output() dataToParent: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    this.dataToParent.emit("data from child");
  }

}
