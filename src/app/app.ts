import { Component, OnInit, signal } from '@angular/core';
import { FaceSnap } from './face-snap/face-snap';
import { FaceSnaps } from './models/face-snap';

@Component({
  imports: [
    FaceSnap
  ],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App implements OnInit{
  mySnap!: FaceSnaps;

  ngOnInit(): void {
    this.mySnap = new FaceSnaps(
      'Archibald',
      'Mon meilleur ami depuis toujours !',
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      new Date(),
      0
    )
  }
}
