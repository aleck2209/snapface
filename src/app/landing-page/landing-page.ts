import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  imports: [
  ],
  selector: 'app-landing-page',
  styleUrl: './landing-page.scss',
  templateUrl: './landing-page.html',
})
export class LandingPage {

  constructor(private router: Router){}
  onContinue(): void {
    this.router.navigateByUrl('face-snap')
  }
}
