import { faFillDrip } from "@fortawesome/free-solid-svg-icons";
import { ColorService } from "src/pages/drawer/services/color.service";
import { DrawAreaService } from "src/shared/services/draw-area.service";
import { calculateRectangleCoords, Coords } from "src/pages/drawer/utils/canvas-utils";
import { BaseTool } from "./base-tool";

export class FillTool extends BaseTool {

    constructor(
        private drawAreaService: DrawAreaService,
        private colorService: ColorService
    ) {
        super();
        this.icon = faFillDrip;
        this.shortcut = "b";
        this.description = "Paint bucket tool"
    }

    public execute(e: MouseEvent): void {
        const coords: Coords = calculateRectangleCoords(e.offsetX, e.offsetY, this.drawAreaService.cellSize);
        const imageData = this.drawAreaService.context.getImageData(coords.x, coords.y, 1, 1).data;
        const str = `rgba(${imageData[0]},${imageData[1]},${imageData[2]},${imageData[3] / 255})`;
        if (str != this.colorService.color)
            this.fillArea(this.drawAreaService.context, calculateRectangleCoords(e.offsetX, e.offsetY, this.drawAreaService.cellSize), str, this.colorService.color);
    }

    private async fillArea(ctx: CanvasRenderingContext2D, currentPosition: Coords, color: string, fillColor: string) {

        ctx.beginPath();
        ctx.fillStyle = fillColor;
        ctx.clearRect(currentPosition.x, currentPosition.y, this.drawAreaService.cellSize, this.drawAreaService.cellSize);
        ctx.rect(currentPosition.x, currentPosition.y, this.drawAreaService.cellSize, this.drawAreaService.cellSize);
        ctx.fill();
        ctx.closePath();
        await this.sleep(40);

        if (currentPosition.x - this.drawAreaService.cellSize >= 0) {
            const imageData = ctx.getImageData(currentPosition.x - this.drawAreaService.cellSize, currentPosition.y, 1, 1).data;
            const str = `rgba(${imageData[0]},${imageData[1]},${imageData[2]},${imageData[3] / 255})`;
            if (str == color)
                this.fillArea(ctx, {x: currentPosition.x - this.drawAreaService.cellSize, y: currentPosition.y}, color, fillColor);
        }

        if (currentPosition.x + this.drawAreaService.cellSize <= 901 - this.drawAreaService.cellSize) {
            const imageData = ctx.getImageData(currentPosition.x + this.drawAreaService.cellSize, currentPosition.y, 1, 1).data;
            const str = `rgba(${imageData[0]},${imageData[1]},${imageData[2]},${imageData[3] / 255})`;
            if (str == color)
                this.fillArea(ctx, {x: currentPosition.x + this.drawAreaService.cellSize, y: currentPosition.y}, color, fillColor);
        }

        if (currentPosition.y - this.drawAreaService.cellSize >= 0) {
            const imageData = ctx.getImageData(currentPosition.x , currentPosition.y - this.drawAreaService.cellSize, 1, 1).data;
            const str = `rgba(${imageData[0]},${imageData[1]},${imageData[2]},${imageData[3] / 255})`;
            if (str == color)
                this.fillArea(ctx, {x: currentPosition.x, y: currentPosition.y - this.drawAreaService.cellSize}, color, fillColor);
        }

        if (currentPosition.y + this.drawAreaService.cellSize <= 901 - this.drawAreaService.cellSize) {
            const imageData = ctx.getImageData(currentPosition.x, currentPosition.y + this.drawAreaService.cellSize, 1, 1).data;
            const str = `rgba(${imageData[0]},${imageData[1]},${imageData[2]},${imageData[3] / 255})`;
            if (str == color)
                this.fillArea(ctx, {x: currentPosition.x, y: currentPosition.y + this.drawAreaService.cellSize}, color, fillColor);
        }


    }

    sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));


}
