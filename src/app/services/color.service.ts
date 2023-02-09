import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  private _color = "white"
  constructor() { }

  set color(color: string) {
    this._color = color;
  }

  get color(): string{
    return this._color;
  }

}
