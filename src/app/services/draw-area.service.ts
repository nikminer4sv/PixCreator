import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DrawAreaService {

  private ctx: CanvasRenderingContext2D;

  constructor() { }

  set context(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
  }

  get context() {
    return this.ctx;
  }

}
