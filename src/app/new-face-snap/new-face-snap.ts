import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { FaceSnaps } from '../models/face-snap';
import { AsyncPipe, UpperCasePipe, NgIf, DatePipe } from '@angular/common';

@Component({
  imports: [ReactiveFormsModule, AsyncPipe, UpperCasePipe, DatePipe],
  selector: 'app-new-face-snap',
  styleUrl: './new-face-snap.scss',
  templateUrl: './new-face-snap.html',
})
export class NewFaceSnap implements OnInit {
  snapForm!: FormGroup;
  faceSnapPreview$!: Observable<FaceSnaps>

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.snapForm = this.formBuilder.group({
      title: [null],
      description: [null],
      imageUrl: [null],
      location: [null],
    });
    this.faceSnapPreview$ = this.snapForm.valueChanges.pipe(
      map(formValue => ({
        ...formValue,
        createdDate: new Date(),
        snaps: 0,
        id: 0
      }))
    )
  }

  onSubmitForm() {
    console.log(this.snapForm.value)
    console.log(this.faceSnapPreview$)
  }
}
