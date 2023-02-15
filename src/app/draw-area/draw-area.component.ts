import { core } from '@angular/compiler';
import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { ColorService } from '../services/color.service';
import { DrawAreaService } from '../services/draw-area.service';
import { ToolService } from '../services/tool.service';
import { calculateRectangleCoords, Coords, drawRectangle } from '../utils/canvas-utils';

@Component({
  selector: 'app-draw-area',
  templateUrl: './draw-area.component.html',
  styleUrls: ['./draw-area.component.scss']
})

export class DrawAreaComponent implements OnInit {

  @ViewChild('paintlayer', { static: true }) paintLayer: ElementRef<HTMLCanvasElement>;  
  @ViewChild('hoverlayer', { static: true }) hoverLayer: ElementRef<HTMLCanvasElement>;  
  private ctx: CanvasRenderingContext2D;
  private hoverCtx: CanvasRenderingContext2D;
  private mouseCondition: boolean = false;
  private hoverColor: string = "rgba(192,192,192,0.1)";

  ngOnInit(): void {
    let ctx = this.paintLayer.nativeElement.getContext('2d');
    let hoverCtx = this.hoverLayer.nativeElement.getContext('2d');
    if (ctx != null && hoverCtx != null) {
      this.ctx = ctx;
      this.hoverCtx = hoverCtx;
      this.drawAreaService.context = ctx;
    } else {
      console.error("canvas error");
    }
  }

  constructor(
    private drawAreaService: DrawAreaService,
    private toolService: ToolService
  ) {}

  onMouseDown(e: any) {
    if (e.target.id === "hover-layer") {
      this.mouseCondition = true;
      this.toolService.execute(e);
    }
  }

  private currentXCell: number;
  private currentYCell: number;
  onMouseMove(e: any) {
    if (e.target.id === "hover-layer") {
      let coords: Coords = calculateRectangleCoords(e.offsetX, e.offsetY);
      if (this.currentXCell != coords.x || this.currentYCell != coords.y) {
        this.currentXCell = coords.x;
        this.currentYCell = coords.y;
        this.hoverCtx.clearRect(0, 0, 900, 900);
        drawRectangle(this.hoverCtx, this.currentXCell, this.currentYCell, 50, 50, this.hoverColor, true);
        if (this.mouseCondition == true) {
          this.onMouseDown(e);
        }
      }
    }
  }

  onMouseUp(e: any) {
    this.mouseCondition = false;
  }

  fillMap(color: string) {
    drawRectangle(this.ctx, 0, 0, 900, 900, color);
  }

  randomInt(max: number): number {
    return Math.floor(Math.random() * max);
  }
  
  randomColor(): string {
    return `rgb(${this.randomInt(256)}, ${this.randomInt(256)}, ${this.randomInt(256)})`
  }
}
