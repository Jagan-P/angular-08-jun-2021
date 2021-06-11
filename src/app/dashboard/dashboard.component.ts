import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  condition = false;

  constructor() { }

  ngOnInit() {
  }

  toggleTable() {
    this.condition = !this.condition;
  }
}
