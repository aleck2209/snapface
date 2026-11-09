import { Injectable } from '@angular/core';
import { FaceSnaps } from '../models/face-snap';
import { SnapType } from '../models/face-type.type';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FaceSnapService {
  constructor(private http: HttpClient) {}

  private faceSnaps: FaceSnaps[] = [];

  getFaceSnaps(): Observable<FaceSnaps[]> {
    return this.http.get<FaceSnaps[]>('http://localhost:3000/facesnaps');
  }

  getFaceSnapById(faceSnapId: string): Observable<FaceSnaps> {
    return this.http.get<FaceSnaps>(`http://localhost:3000/facesnaps/${faceSnapId}`)
  }

  snapFaceSnapById(faceSnapId: string, snapType: SnapType): void {
    
    // const faceSnap = this.getFaceSnapById(faceSnapId);
    // faceSnap.snap(snapType);
  }

  addFaceSnap(formValue: {
    title: string;
    description: string;
    imageUrl: string;
    location?: string;
  }): void {
    const faceSnap = new FaceSnaps(
      formValue.title,
      formValue.description,
      formValue.imageUrl,
      new Date(),
      0,
    );
    if (formValue.location) {
      faceSnap.setLocation(formValue.location);
    }
    this.faceSnaps.push(faceSnap);
  }
}
