
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { ColorService } from "src/drawer/drawer-module/services/color.service";
import { DrawAreaService } from "src/drawer/drawer-module/services/draw-area.service";
import { calculateRectangleCoords, Coords, drawRectangle } from "src/drawer/drawer-module/utils/canvas-utils";
import { BaseTool } from "./base-tool";

export class PaintTool extends BaseTool {

    constructor(
        private drawAreaService: DrawAreaService,
        private colorService: ColorService
    ) {
        super();
        this.icon = faPen;
        this.shortcut = "p";
        this.description = "Pen tool"
    }

    public execute(e: MouseEvent): void {
        let coords: Coords = calculateRectangleCoords(e.offsetX, e.offsetY, this.drawAreaService.cellSize);
        drawRectangle(this.drawAreaService.context, coords.x, coords.y, this.drawAreaService.cellSize, this.drawAreaService.cellSize, this.colorService.color);
    }

}
