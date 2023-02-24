import { faEraser } from "@fortawesome/free-solid-svg-icons";
import { DrawAreaService } from "src/drawer/drawer-module/services/draw-area.service";
import { calculateRectangleCoords, Coords, drawRectangle } from "src/drawer/drawer-module/utils/canvas-utils";
import { BaseTool } from "./base-tool";

export class EraseTool extends BaseTool {

    constructor(
        private drawAreaService: DrawAreaService
    ) {
        super();
        this.icon = faEraser;
        this.shortcut = "e";
        this.description = "Eraser tool"
    }

    public execute(e: MouseEvent): void {
        let coords: Coords = calculateRectangleCoords(e.offsetX, e.offsetY, this.drawAreaService.cellSize);
        this.drawAreaService.context.clearRect(coords.x, coords.y, this.drawAreaService.cellSize, this.drawAreaService.cellSize);
    }

}
