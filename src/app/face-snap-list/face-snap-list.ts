import { Component, OnInit } from '@angular/core';
import { FaceSnaps } from '../models/face-snap';
import { FaceSnap } from '../face-snap/face-snap';
import { FaceSnapService } from '../services/face-snaps.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';


@Component({
  imports: [FaceSnap, AsyncPipe],
  selector: 'app-face-snap-list',
  styleUrl: './face-snap-list.scss',
  templateUrl: './face-snap-list.html',
})
export class FaceSnapList implements OnInit {

  faceSnaps$!: Observable<FaceSnaps[]>

  constructor(private faceSnapService: FaceSnapService) {}


  ngOnInit(): void {
    this.faceSnaps$ = this.faceSnapService.getFaceSnaps()
  }
}
