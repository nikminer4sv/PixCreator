import { core } from '@angular/compiler';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ColorService } from '../services/color.service';

@Component({
  selector: 'app-draw-area',
  templateUrl: './draw-area.component.html',
  styleUrls: ['./draw-area.component.scss']
})

export class DrawAreaComponent implements OnInit {

  @ViewChild('paintlayer', { static: true }) paintLayer: ElementRef<HTMLCanvasElement>;  
  private ctx: CanvasRenderingContext2D;
  private mouseCondition: boolean = false;
  private hoverColor: string = "rgba(192,192,192,0.1)";
  private color: BehaviorSubject<string>;

  ngOnInit(): void {
    let ctx = this.paintLayer.nativeElement.getContext('2d');
    if (ctx != null) {
      this.ctx = ctx;
    } else {
      console.log("canvas error");
    }

    this.color = this.colorService.getColor();
  }

  constructor(private colorService: ColorService) {
  }

  private currentCellColor: string;
  onMouseDown(e: any) {
    if (e.target.id === "paint-layer") {
      this.mouseCondition = true;
      this.color.subscribe(color => this.currentCellColor = color);
      let coords: Coords = this.calculateRectangleCoords(e.offsetX, e.offsetY);
      this.drawRectangle(coords.x, coords.y, 50, 50, this.currentCellColor)
    }
  }

  private currentXCell: number;
  private currentYCell: number;
  onMouseMove(e: any) {
    if (e.target.id === "paint-layer") {
      let coords: Coords = this.calculateRectangleCoords(e.offsetX, e.offsetY);
      if (this.currentXCell != coords.x || this.currentYCell != coords.y) {

        this.drawRectangle(this.currentXCell, this.currentYCell, 50, 50, this.currentCellColor, true);

        this.currentXCell = coords.x;
        this.currentYCell = coords.y;

        let data = this.ctx.getImageData(e.offsetX, e.offsetY, 1, 1).data;
        this.currentCellColor = `rgba(${data[0]}, ${data[1]}, ${data[2]}, ${data[3]})`;

        this.drawRectangle(coords.x, coords.y, 50, 50, this.hoverColor)

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
    this.drawRectangle(0, 0, 900, 900, color);
  }

  randomInt(max: number): number {
    return Math.floor(Math.random() * max);
  }
  
  randomColor(): string {
    return `rgb(${this.randomInt(256)}, ${this.randomInt(256)}, ${this.randomInt(256)})`
  }

  drawRectangle(x: number, y: number, width: number, height: number, color: string, clearBeforePainting: boolean = false) {
    this.ctx.beginPath();
    this.ctx.fillStyle = color;
    if (clearBeforePainting)
      this.ctx.clearRect(x, y, width, height);
    this.ctx.rect(x, y, width, height);
    this.ctx.fill();
    this.ctx.closePath();
  }

  calculateRectangleCoords(x: number, y: number): Coords {
    return {
      x: x - x % 50, 
      y: y - y % 50
    };
  }

}

interface Coords {
  x: number,
  y: number
}
