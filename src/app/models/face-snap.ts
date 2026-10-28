import { SnapType } from "./face-type.type";

export class FaceSnaps {
  location?: string;
  id: string;

  constructor(
    public title: string,
    public description: string,
    public imageUrl: string,
    public createdAt: Date,
    public snaps: number,
  ) {
    this.id = crypto.randomUUID().substring(0, 8)
  }

  addSnap(): void {
    this.snaps++;
  }

  removeSnap(): void {
    this.snaps--;
  }

  
  setLocation(location: string): void {
    this.location = location
  }
  
  snap(snapType: SnapType) {
    if (snapType === 'snap') {
      this.addSnap()
    } else if (snapType === 'unsnap') {
      this.removeSnap();
    }
  }

  withLocation(location: string): FaceSnaps {
    this.setLocation(location)
    return this
  }
}
