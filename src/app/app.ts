import { Component, OnInit } from '@angular/core';
import { Header } from './header/header';
import { RouterOutlet } from '@angular/router';
import { interval, Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { map, filter, tap } from 'rxjs';

@Component({
  imports: [Header, RouterOutlet, AsyncPipe],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App implements OnInit {
  interval$!: Observable<string>;
  ngOnInit(): void {
    this.interval$ = interval(1000).pipe(
      filter((value) => value % 3 === 0),
      map((value) => (value % 2 === 0 ? `${value} est pair` : `${value} est impair`)),
      tap(text => this.logger(text))
    );
  }

  logger(text: string): void {
    console.log(`Log: ${text}`);
  }
}
