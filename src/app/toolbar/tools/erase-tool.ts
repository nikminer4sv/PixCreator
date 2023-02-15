import { faEraser } from "@fortawesome/free-solid-svg-icons";
import { calculateRectangleCoords, Coords, drawRectangle } from "src/app/utils/canvas-utils";
import { BaseTool } from "./base-tool";
import { ToolDependencies } from "./tool-dependencies";

export class EraseTool extends BaseTool {

    constructor(deps: ToolDependencies) {
        super(deps); 
        this.icon = faEraser;  
        this.shortcut = "e";
    }

    public execute(e: MouseEvent): void {
        let coords: Coords = calculateRectangleCoords(e.offsetX, e.offsetY);
        this.deps.drawAreaService.context.clearRect(coords.x, coords.y, 50, 50);
    }

}