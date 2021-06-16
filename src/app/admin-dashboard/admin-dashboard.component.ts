import { Component, Input, OnInit, Output, EventEmitter, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class AdminDashboardComponent implements OnInit {
  @Input() dataToChild: string="";
  dataToTransform = "data";
  @Output() dataToParent: EventEmitter<any> = new EventEmitter<any>();
  dateNow = new Date();
  heroes = [
    {name: "superman", canFly: true},
    {name: "batman", canFly: false},
    {name: "superwoman", canFly: true}
  ]
  constructor(
  ) { }

  ngOnInit() {
    setTimeout(() => {
      
      this.dataToParent.emit("data from child");
    }, 1000);
  }

  revealData() {
    console.log(this.dataToTransform);
    this.heroes.push({name: "spiderman", canFly: true});
    this.heroes = [...this.heroes];
    console.log(this.heroes);
  }

}
