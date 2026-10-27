import { Component } from '@angular/core';
import { FaceSnapList } from './face-snap-list/face-snap-list';
import { Header } from './header/header';

@Component({
  imports: [FaceSnapList, Header],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {}
