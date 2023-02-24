import { faEyeDropper } from "@fortawesome/free-solid-svg-icons";
import { ColorService } from "src/drawer/drawer-module/services/color.service";
import { DrawAreaService } from "src/drawer/drawer-module/services/draw-area.service";
import { calculateRectangleCoords, Coords, drawRectangle } from "src/drawer/drawer-module/utils/canvas-utils";
import { BaseTool } from "./base-tool";

export class ColorPickerTool extends BaseTool {

    constructor(
        private drawAreaService: DrawAreaService,
        private colorService: ColorService
    ) {
        super()
        this.icon = faEyeDropper;
        this.shortcut = "o";
        this.description = "Color picker";
    }

    public execute(e: MouseEvent): void {
        let coords: Coords = calculateRectangleCoords(e.offsetX, e.offsetY, this.drawAreaService.cellSize);
        let imageData = this.drawAreaService.context.getImageData(coords.x, coords.y, 1, 1).data;
        let str = `rgba(${imageData[0]},${imageData[1]},${imageData[2]},${imageData[3] / 255})`;
        this.colorService.color = str;
    }

}
