import { Component, Input } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { Router } from '@angular/router';
import { FaceSnaps } from '../models/face-snap';

@Component({
  imports: [TitleCasePipe],
  selector: 'app-face-snap',
  styleUrl: './face-snap.scss',
  templateUrl: './face-snap.html',
})
export class FaceSnap {
  @Input() faceSnap!: FaceSnaps

  constructor(private router: Router) {}

  onViewFaceSnap() {
    this.router.navigateByUrl(`face-snap/${this.faceSnap.id}`)
  }
}
