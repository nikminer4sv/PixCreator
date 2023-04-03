import { faEyeDropper } from "@fortawesome/free-solid-svg-icons";
import { ColorService } from "src/pages/drawer/services/color.service";
import { DrawAreaService } from "src/shared/services/draw-area.service";
import { calculateRectangleCoords, Coords } from "src/pages/drawer/utils/canvas-utils";
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
        const coords: Coords = calculateRectangleCoords(e.offsetX, e.offsetY, this.drawAreaService.cellSize);
        const imageData = this.drawAreaService.context.getImageData(coords.x, coords.y, 1, 1).data;
        const str = `rgba(${imageData[0]},${imageData[1]},${imageData[2]},${imageData[3] / 255})`;
        this.colorService.color = str;
    }

}
