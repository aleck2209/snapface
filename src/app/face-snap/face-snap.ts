import { Component, OnInit } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-face-snap',
  styleUrl: './face-snap.scss',
  templateUrl: './face-snap.html',
})
export class FaceSnap implements OnInit {
  title!: string;
  description!: string;
  createdAt!: Date;
  snaps!: number;
  imageUrl!: string;
  isliked: boolean = false;

  ngOnInit(): void {
    this.title = 'Archibald';
    this.description = 'Mon meilleur ami depuis toujours !';
    this.createdAt = new Date();
    this.snaps = 5;
    this.imageUrl = 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg';
  }

  onLiked(): void {
    this.isliked ? this.snaps-- : this.snaps++
    this.isliked = !this.isliked
  }
}
