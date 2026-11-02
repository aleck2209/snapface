import { Component, OnDestroy, OnInit } from '@angular/core';
import { FaceSnaps } from '../models/face-snap';
import { FaceSnap } from '../face-snap/face-snap';
import { FaceSnapService } from '../services/face-snaps.service';
import { interval, Subject } from 'rxjs';
import { tap, takeUntil } from 'rxjs/operators';

@Component({
  imports: [FaceSnap],
  selector: 'app-face-snap-list',
  styleUrl: './face-snap-list.scss',
  templateUrl: './face-snap-list.html',
})
export class FaceSnapList implements OnInit, OnDestroy {
  faceSnaps!: FaceSnaps[];
  private destroy$!: Subject<boolean>

  constructor(private faceSnapService: FaceSnapService) {}


  ngOnInit(): void {
    this.destroy$ = new Subject<boolean>
    this.faceSnaps = this.faceSnapService.getFaceSnaps();

    interval(1000).pipe(
      takeUntil(this.destroy$),
      tap(console.log)
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true)
  }
}
