import { faEyeDropper } from "@fortawesome/free-solid-svg-icons";
import { calculateRectangleCoords, Coords, drawRectangle } from "src/app/utils/canvas-utils";
import { BaseTool } from "./base-tool";
import { ToolDependencies } from "./tool-dependencies";

export class ColorPickerTool extends BaseTool {

    constructor(deps: ToolDependencies) {
        super(deps);   
        this.icon = faEyeDropper;
    }

    public execute(e: any): void {
        let coords: Coords = calculateRectangleCoords(e.offsetX, e.offsetY);
        let imageData = this.deps.drawAreaService.context.getImageData(coords.x, coords.y, 1, 1).data;
        let str = `rgba(${imageData[0]},${imageData[1]},${imageData[2]},${imageData[3] / 255})`;
        this.deps.colorService.color = str;
    }

}