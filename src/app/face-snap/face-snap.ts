import { Component, Input, OnInit } from '@angular/core';
import { FaceSnaps } from '../models/face-snap';
import { CurrencyPipe, DatePipe, NgClass, NgStyle, TitleCasePipe } from '@angular/common';
import { FaceSnapService } from '../services/face-snaps.service';

@Component({
  imports: [
    NgStyle,
    NgClass,
    TitleCasePipe,
    DatePipe,
  ],
  selector: 'app-face-snap',
  styleUrl: './face-snap.scss',
  templateUrl: './face-snap.html',
})
export class FaceSnap implements OnInit {
@Input() faceSnap!: FaceSnaps;
  snapButtonText!: string;
  userHasSnapped!: boolean;

  constructor(private faceSnapService: FaceSnapService){}

  ngOnInit(): void {
    this.snapButtonText = 'Oh Snap!';
    this.userHasSnapped = false
  }

  onSnap(): void {
    if (this.userHasSnapped) {
      this.unSnap();
    } else {
      this.snap();
    }
  }

  unSnap() {
    this.faceSnap.removeSnap();
    this.snapButtonText = 'Oh Snap!';
    this.userHasSnapped = false;
  }

  snap() {
    this.faceSnapService.geFaceSnapById(this.faceSnap.id);
    this.snapButtonText = 'Oops, unSnap!';
    this.userHasSnapped = true;
  }
}
