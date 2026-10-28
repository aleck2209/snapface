import { Component, OnInit } from '@angular/core';
import { FaceSnaps } from '../models/face-snap';
import { FaceSnap } from '../face-snap/face-snap';
import { Header } from '../header/header';
import { FaceSnapService } from '../services/face-snaps.service';

@Component({
  imports: [FaceSnap],
  selector: 'app-face-snap-list',
  styleUrl: './face-snap-list.scss',
  templateUrl: './face-snap-list.html',
})
export class FaceSnapList implements OnInit{
  faceSnaps!: FaceSnaps[];

  constructor(private faceSnapService: FaceSnapService) {}

  ngOnInit(): void {
    this.faceSnaps = this.faceSnapService.getFaceSnaps();
  }
}
