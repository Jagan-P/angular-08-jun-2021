import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-rx-js',
  templateUrl: './rx-js.component.html',
  styleUrls: ['./rx-js.component.scss']
})
export class RxJsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // const observable = new Observable(subscriber => {
    //   subscriber.next(1);
    //   subscriber.next(2);
    //   subscriber.next(3);
    //   setTimeout(() => {
    //     subscriber.next(4);
    //     // subscriber.error("Some error")
    //     subscriber.complete();
    //     subscriber.next(5);
    //   }, 1000);
    // });

    // observable.subscribe({
    //   next(x) { console.log('got value ' + x); },
    //   error(err) { console.error('something wrong occurred: ' + err); },
    //   complete() { console.log('done'); }
    // });

    // observable.subscribe({
    //   next(x) { console.log('got new value ' + x); },
    //   error(err) { console.error('something new wrong occurred: ' + err); },
    //   complete() { console.log('new done'); }
    // });

    const unsubscribe = new Subject<any>();

    const subject = new Subject<number>();

    subject.pipe(take(2)).subscribe({
      next: (v) => console.log(`observerA: ${v}`)
    });
    subject.pipe(takeUntil(unsubscribe)).subscribe({
      next: (v) => console.log(`observerB: ${v}`)
    });

    subject.next(10);
    subject.next(2);
    unsubscribe.next(0);
    

    // subject.subscribe((data)=>{
    //   console.log("subject",data);
    // })

    // subject.next(1);

    // const subject = new BehaviorSubject<number>(0);

    // subject.next(1);
    // subject.next(2);
    
    // subject.subscribe({
    //   next: (v) => console.log(`observerA: ${v}`)
    // });
    // subject.subscribe({
    //   next: (v) => console.log(`observerB: ${v}`)
    // });

    // const subject = new ReplaySubject<number>(4);

    // subject.next(1);
    // subject.next(2);
    // subject.next(3);
    // subject.next(4);
    
    // subject.subscribe({
    //   next: (v) => console.log(`observerA: ${v}`)
    // });
    // subject.subscribe({
    //   next: (v) => console.log(`observerB: ${v}`)
    // });

  }

}
