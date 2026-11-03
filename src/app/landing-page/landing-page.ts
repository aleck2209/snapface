import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
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

  onSubmitForm(form: NgForm): void {
    console.log(form.value)
  }
}
