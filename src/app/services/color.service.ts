import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  private _color: BehaviorSubject<string> = new BehaviorSubject<string>("rgba(255,255,255,1)");
  constructor() { }

  set color(color: string) {
    this._color.next(color);
  }

  get color$(): Observable<string>{
    return this._color.asObservable();
  }

  get color(): string {
    return this._color.getValue();
  }

}
