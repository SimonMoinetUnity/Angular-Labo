import { Component } from '@angular/core';
import { Observable, filter, interval, map, tap } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent {

  interval$ = new Observable<number>;
  chrono!:number;

  ngOnInit(){
    this.interval$ = interval(1000).pipe(
      map(data => data*10),
      filter(data => data < 50),
      tap(data => console.log(data))
    )

    this.interval$.subscribe(data => this.chrono = data);

    

  }

}
