import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DrawAreaService {

  private _cellSize: number = 25;
  private ctx: CanvasRenderingContext2D;
  private hoverCtx: CanvasRenderingContext2D;

  constructor() { }

  set context(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
  }

  get context() {
    return this.ctx;
  }

  set hoverContext(ctx: CanvasRenderingContext2D) {
    this.hoverCtx = ctx;
  }

  get hoverContext() {
    return this.hoverCtx;
  }

  get cellSize(): number {
    return this._cellSize;
  }

}
