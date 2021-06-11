import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  @Input() dataToChild: string="";

  @Output() dataToParent: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    this.dataToParent.emit("data from child");
  }

}
