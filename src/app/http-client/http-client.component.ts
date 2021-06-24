import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription, pipe, of, Subject} from 'rxjs';
import { filter, map, take, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.scss']
})
export class HttpClientComponent implements OnInit {
  getData;
  getData$: Observable<any>;
  getDataSubscriber: Subscription;
  unsubscribe = new Subject<any>();
  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit() {
    this.getDataSubscriber = this.httpClient.get("https://jsonplaceholder.typicode.com/posts").pipe(takeUntil(this.unsubscribe)).subscribe((data)=>{
      // console.log(data);
      this.getData = data;
      this.getDataSubscriber.unsubscribe();
    })
    
    // this.unsubscribe.next();
    
    // this.getDataSubscriber.unsubscribe();

    this.getData$ = this.httpClient.get("https://jsonplaceholder.typicode.com/posts").pipe(takeUntil(this.unsubscribe)).pipe(
      filter((post: any) => {console.log(post.id);return post.id % 2 !== 0})
    );

    const squareOdd = of(1, 2, 3, 4, 5)
    .pipe(takeUntil(this.unsubscribe)).pipe(
      filter(n => {console.log(n); return n % 2 !== 0}),
      map(n => n * n)
    );

    squareOdd.subscribe(x => console.log(x));


    this.httpClient.post("https://jsonplaceholder.typicode.com/posts", {name: "POST data"}).pipe(takeUntil(this.unsubscribe)).subscribe((data)=>{
      console.log(data);
    })
  }

  ngOnDestroy() {
    this.unsubscribe.next();
  }

}
