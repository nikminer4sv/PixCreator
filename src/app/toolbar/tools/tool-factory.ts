
import { BaseTool } from "./base-tool";
import { ColorPickerTool } from "./color-picker-tool";
import { EraseTool } from "./erase-tool";
import { FillTool } from "./fill-tool";
import { PaintTool } from "./paint-tool";
import { ToolDependencies } from "./tool-dependencies";

export class ToolFactory {

    private deps: ToolDependencies;

    constructor(deps: ToolDependencies) {
        this.deps = deps;
    }

    createPaintTool(): BaseTool {
        return new PaintTool(this.deps);
    }

    createEraseTool(): BaseTool {
        return new EraseTool(this.deps);
    }

    createFillTool(): BaseTool {
        return new FillTool(this.deps);
    }

    createColorPicker(): BaseTool {
        return new ColorPickerTool(this.deps);
    }

    getToolsArray(): BaseTool[] {
        let list = []
        list.push(this.createPaintTool());
        list.push(this.createEraseTool());
        list.push(this.createFillTool());
        list.push(this.createColorPicker()); 
        return list;
    }

}