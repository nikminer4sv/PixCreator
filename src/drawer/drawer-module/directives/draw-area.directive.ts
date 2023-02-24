import { Directive, HostListener, ElementRef  } from '@angular/core';
import { ColorService } from '../services/color.service';
import { DrawAreaService } from '../services/draw-area.service';
import { ToolService } from '../services/tool.service';
import { calculateRectangleCoords, Coords, drawRectangle } from '../utils/canvas-utils';

@Directive({
  selector: '[appDrawArea]'
})
export class DrawAreaDirective {

  constructor(
    private drawAreaService: DrawAreaService,
    private toolService: ToolService,
    private colorService: ColorService,
  ) { }

  private mouseCondition = false;
  private currentXCell: number;
  private currentYCell: number;
  @HostListener('mousemove', ['$event']) onMouseMove(e: any) {
    if (e.target.id === "hover-layer") {
      let coords: Coords = calculateRectangleCoords(e.offsetX, e.offsetY, this.drawAreaService.cellSize);
      if (this.currentXCell != coords.x || this.currentYCell != coords.y) {
        this.currentXCell = coords.x;
        this.currentYCell = coords.y;
        this.drawAreaService.hoverContext.clearRect(0, 0, 900, 900);
        drawRectangle(this.drawAreaService.hoverContext, this.currentXCell, this.currentYCell, this.drawAreaService.cellSize, this.drawAreaService.cellSize, this.colorService.hoverColor);
        if (this.mouseCondition == true) {
          this.onMouseDown(e);
        }
      }
    }
  }

  @HostListener('mousedown', ['$event']) onMouseDown(e: any) {
    if (e.target.id === "hover-layer") {
      this.mouseCondition = true;
      this.toolService.execute(e);
    }
  }

  @HostListener('mouseup', ['$event']) onMouseUp(e: any) {
    this.mouseCondition = false;
  }

}
