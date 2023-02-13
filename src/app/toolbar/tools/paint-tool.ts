
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { calculateRectangleCoords, Coords, drawRectangle } from "src/app/utils/canvas-utils";
import { BaseTool } from "./base-tool";
import { ToolDependencies } from "./tool-dependencies";

export class PaintTool extends BaseTool {

    constructor(deps: ToolDependencies) {
        super(deps);   
        this.icon = faPen;
    }

    public execute(e: any): void {
        let coords: Coords = calculateRectangleCoords(e.offsetX, e.offsetY);
        drawRectangle(this.deps.drawAreaService.context, coords.x, coords.y, 50, 50, this.deps.colorService.color);
    }

}