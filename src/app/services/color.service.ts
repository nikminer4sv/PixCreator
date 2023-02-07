import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  private currentColor = new BehaviorSubject("white");
  constructor() { }

  setColor(color: string) {
    this.currentColor.next(color);
  }

  getColor(): BehaviorSubject<string> {
    return this.currentColor;
  }

}
