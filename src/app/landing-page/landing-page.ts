import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  imports: [FormsModule
  ],
  selector: 'app-landing-page',
  styleUrl: './landing-page.scss',
  templateUrl: './landing-page.html',
})
export class LandingPage implements OnInit{
  userEmail!: string;

  constructor(private router: Router){}
  onContinue(): void {
    this.router.navigateByUrl('face-snap')
  }

  ngOnInit(): void {
    
  }

  onSubmitForm(): void {
    console.log(this.userEmail)
  }
}
