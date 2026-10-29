import { Routes } from '@angular/router';
import { FaceSnapList } from './face-snap-list/face-snap-list';
import { LandingPage } from './landing-page/landing-page';
import { SingleFaceSnap } from './single-face-snap/single-face-snap';

export const routes: Routes = [
  {path: 'face-snap/:id', component: SingleFaceSnap},
  { path: 'face-snap', component: FaceSnapList },
  { path: '', component: LandingPage },
];
