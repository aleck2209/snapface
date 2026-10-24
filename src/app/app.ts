import { Component, signal } from '@angular/core';
import { FaceSnap } from './face-snap/face-snap';

@Component({
  imports: [
    FaceSnap
  ],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  
}
