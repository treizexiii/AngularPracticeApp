import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  second: number;
  counterSuscription: Subscription;

  constructor() { }

  ngOnDestroy(): void {
    this.counterSuscription.unsubscribe();
  }

  ngOnInit(): void {
    const counter = interval(1000);
    this.counterSuscription = counter.subscribe(
      (value: number) => {
        this.second = value;
      }
    );
  }
}
