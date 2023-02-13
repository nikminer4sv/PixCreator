import { faFillDrip } from "@fortawesome/free-solid-svg-icons";
import { calculateRectangleCoords, Coords, drawRectangle } from "src/app/utils/canvas-utils";
import { BaseTool } from "./base-tool";
import { ToolDependencies } from "./tool-dependencies";

export class FillTool extends BaseTool {

    constructor(deps: ToolDependencies) {
        super(deps);   
        this.icon = faFillDrip;
    }

    public execute(e: any): void {
        let coords: Coords = calculateRectangleCoords(e.offsetX, e.offsetY);
        let imageData = this.deps.drawAreaService.context.getImageData(coords.x, coords.y, 1, 1).data;
        let str = `rgba(${imageData[0]},${imageData[1]},${imageData[2]},${imageData[3] / 255})`;  
        console.log(str + " " + this.deps.colorService.color)
        if (str != this.deps.colorService.color)
            this.fillArea(this.deps.drawAreaService.context, calculateRectangleCoords(e.offsetX, e.offsetY), str, this.deps.colorService.color);
    }

    private async fillArea(ctx: CanvasRenderingContext2D, currentPosition: Coords, color: string, fillColor: string) {

        ctx.beginPath();
        ctx.fillStyle = fillColor;
        ctx.clearRect(currentPosition.x, currentPosition.y, 50, 50);
        ctx.rect(currentPosition.x, currentPosition.y, 50, 50);
        ctx.fill();
        ctx.closePath();
        await this.sleep(40);

        if (currentPosition.x - 50 >= 0) {
            let imageData = ctx.getImageData(currentPosition.x - 50, currentPosition.y, 1, 1).data;
            let str = `rgba(${imageData[0]},${imageData[1]},${imageData[2]},${imageData[3] / 255})`;
            if (str == color)
                this.fillArea(ctx, {x: currentPosition.x - 50, y: currentPosition.y}, color, fillColor);
        }

        if (currentPosition.x + 50 <= 851) {
            let imageData = ctx.getImageData(currentPosition.x + 50, currentPosition.y, 1, 1).data;
            let str = `rgba(${imageData[0]},${imageData[1]},${imageData[2]},${imageData[3] / 255})`;
            if (str == color)
                this.fillArea(ctx, {x: currentPosition.x + 50, y: currentPosition.y}, color, fillColor);
        }

        if (currentPosition.y - 50 >= 0) {
            let imageData = ctx.getImageData(currentPosition.x , currentPosition.y - 50, 1, 1).data;
            let str = `rgba(${imageData[0]},${imageData[1]},${imageData[2]},${imageData[3] / 255})`;
            if (str == color)
                this.fillArea(ctx, {x: currentPosition.x, y: currentPosition.y - 50}, color, fillColor);
        }

        if (currentPosition.y + 50 <= 851) {
            let imageData = ctx.getImageData(currentPosition.x, currentPosition.y + 50, 1, 1).data;
            let str = `rgba(${imageData[0]},${imageData[1]},${imageData[2]},${imageData[3] / 255})`;
            if (str == color)
                this.fillArea(ctx, {x: currentPosition.x, y: currentPosition.y + 50}, color, fillColor);
        }

    
    }

    sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
    

}