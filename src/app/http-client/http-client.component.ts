import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.scss']
})
export class HttpClientComponent implements OnInit {
  getData;
  getData$: Observable<any>;
  getDataSubscriber: Subscription;
  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit() {
    this.getDataSubscriber = this.httpClient.get("https://jsonplaceholder.typicode.com/posts").subscribe((data)=>{
      // console.log(data);
      this.getData = data;
      this.getDataSubscriber.unsubscribe();
    })
    
    // this.getDataSubscriber.unsubscribe();

    this.getData$ = this.httpClient.get("https://jsonplaceholder.typicode.com/posts");
  }

  ngOnDestroy() {
    this.getDataSubscriber.unsubscribe();
  }

}
