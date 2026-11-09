import { Component, Input, OnInit } from '@angular/core';
import { NgClass, NgStyle, TitleCasePipe, DatePipe, AsyncPipe } from '@angular/common';
import { FaceSnapService } from '../services/face-snaps.service';
import { FaceSnaps } from '../models/face-snap';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  imports: [NgStyle, NgClass, TitleCasePipe, DatePipe, RouterLink, AsyncPipe],
  selector: 'app-single-face-snap',
  styleUrl: './single-face-snap.scss',
  templateUrl: './single-face-snap.html',
})
export class SingleFaceSnap implements OnInit {
  faceSnap!: FaceSnaps;
  faceSnap$!: Observable<FaceSnaps>
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

  onSnap(faceSnapId: string): void {
    if (this.userHasSnapped) {
      this.faceSnapService.snapFaceSnapById(faceSnapId, 'unsnap');
      this.snapButtonText = 'Oh Snap!';
      this.userHasSnapped = false;
    } else {
      this.faceSnapService.snapFaceSnapById(faceSnapId, 'snap');
      this.snapButtonText = 'Oops, unSnap!';
      this.userHasSnapped = true;
    }
  }

  private prepareInterface() {
    this.snapButtonText = 'Oh Snap!';
    this.userHasSnapped = false;
  }

  private getFaceSnap() {
    const faceSnapId = this.route.snapshot.params['id'];
    this.faceSnap$ = this.faceSnapService.getFaceSnapById(faceSnapId);
  }
}
