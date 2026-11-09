import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { map, Observable, tap } from 'rxjs';
import { FaceSnaps } from '../models/face-snap';
import { AsyncPipe, UpperCasePipe, DatePipe } from '@angular/common';
import { FaceSnapService } from '../services/face-snaps.service';
import { Router } from '@angular/router';

@Component({
  imports: [ReactiveFormsModule, AsyncPipe, UpperCasePipe, DatePipe],
  selector: 'app-new-face-snap',
  styleUrl: './new-face-snap.scss',
  templateUrl: './new-face-snap.html',
})
export class NewFaceSnap implements OnInit {
  snapForm!: FormGroup;
  faceSnapPreview$!: Observable<FaceSnaps>
  urlRegex!: RegExp;

  constructor(
    private formBuilder: FormBuilder,
    private faceSnapService: FaceSnapService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;
    this.snapForm = this.formBuilder.group({
      title: [null, [Validators.required]],
      description: [null, [Validators.required]],
      imageUrl: [null, [Validators.required, Validators.pattern(this.urlRegex)]],
      location: [null],
    }, {
      updateOn: 'blur'
    });
    this.faceSnapPreview$ = this.snapForm.valueChanges.pipe(
      map(formValue => ({
        ...formValue,
        createdAt: new Date(),
        snaps: 0,
        id: 0
      }))
    )
  }

  onSubmitForm() {
    this.faceSnapService.addFaceSnap(this.snapForm.value).pipe(
      tap(() => this.router.navigateByUrl('/face-snap'))
    ).subscribe(); 
  }
}
