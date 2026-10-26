import { Component, OnInit, signal } from '@angular/core';
import { FaceSnap } from './face-snap/face-snap';
import { FaceSnaps } from './models/face-snap';

@Component({
  imports: [FaceSnap],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App implements OnInit {
  faceSnaps!: FaceSnaps[];

  ngOnInit(): void {
    this.faceSnaps = [
      new FaceSnaps(
        'Archibald',
        'Mon meilleur ami depuis toujours !',
        'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        new Date(),
        0,
      ),
      new FaceSnaps(
        'Three Rock Mountain',
        'Un endroit magnifique pour les randonnées',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
        new Date(),
        6,
      ),
      new FaceSnaps(
        'Un bon repas',
        "Mmmh que c'est bon !",
        'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
        new Date(),
        156,
      ),
    ];
    this.faceSnaps[1].setLocation("à la montagne");
  }
}
