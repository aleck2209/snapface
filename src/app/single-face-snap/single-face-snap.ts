import { Component, Input, OnInit } from '@angular/core';
import { NgClass, NgStyle, TitleCasePipe, DatePipe } from '@angular/common';
import { FaceSnapService } from '../services/face-snaps.service';
import { FaceSnaps } from '../models/face-snap';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  imports: [NgStyle, NgClass, TitleCasePipe, DatePipe, RouterLink],
  selector: 'app-single-face-snap',
  styleUrl: './single-face-snap.scss',
  templateUrl: './single-face-snap.html',
})
export class SingleFaceSnap implements OnInit {
  faceSnap!: FaceSnaps;
  snapButtonText!: string;
  userHasSnapped!: boolean;

  constructor(
    private faceSnapService: FaceSnapService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.prepareInterface();
    this.getFaceSnap();
  }

  onSnap(): void {
    if (this.userHasSnapped) {
      this.unSnap();
    } else {
      this.snap();
    }
  }

  unSnap() {
    this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
    this.snapButtonText = 'Oh Snap!';
    this.userHasSnapped = false;
  }

  snap() {
    this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'snap');
    this.snapButtonText = 'Oops, unSnap!';
    this.userHasSnapped = true;
  }

  private prepareInterface() {
    this.snapButtonText = 'Oh Snap!';
    this.userHasSnapped = false;
  }

  private getFaceSnap() {
    const faceSnapId = this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapService.getFaceSnapById(faceSnapId);
  }
}
