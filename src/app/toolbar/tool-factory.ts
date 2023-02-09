import { ToolDependecies } from "../services/tool.service";
import { calculateRectangleCoords, Coords, drawRectangle } from "../utils/canvas-utils";
import { ITool } from "./tool";

export interface IToolFactory {
    createEraseTool(): ITool;
    createFillTool(): ITool;
    createPaintTool(): ITool;
    getToolsArray(): ITool[];
}

export class ToolFactory implements IToolFactory {

    createEraseTool(): ITool {
        return  {
            title: "EraseTool",
            action: (ctx: CanvasRenderingContext2D, e: any, deps: ToolDependecies) => {
                let coords: Coords = calculateRectangleCoords(e.offsetX, e.offsetY);
                ctx.clearRect(coords.x, coords.y, 50, 50);
            }
        }
    }

    createFillTool(): ITool {
        return  {
            title: "FillTool",
            action: (ctx: CanvasRenderingContext2D, e: any, deps: ToolDependecies) => {
                drawRectangle(ctx, 0, 0, 900, 900, deps.colorService.color)
            }
        }
    }

    createPaintTool(): ITool {
        return  {
            title: "PaintTool",
            action: (ctx: CanvasRenderingContext2D, e: any, deps: ToolDependecies) => {
                let coords: Coords = calculateRectangleCoords(e.offsetX, e.offsetY);
                drawRectangle(ctx, coords.x, coords.y, 50, 50, deps.colorService.color)
            }
        }
    }
    
    getToolsArray(): ITool[] {
        let tools: ITool[] = [];
        tools.push(this.createEraseTool());
        tools.push(this.createFillTool());
        tools.push(this.createPaintTool());
        return tools;
    }

}