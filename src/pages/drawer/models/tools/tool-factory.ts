
import { ColorService } from "src/pages/drawer/services/color.service";
import { DrawAreaService } from "src/pages/drawer/services/draw-area.service";
import { BaseTool } from "./base-tool";
import { ColorPickerTool } from "./color-picker-tool";
import { EraseTool } from "./erase-tool";
import { FillTool } from "./fill-tool";
import { PaintTool } from "./paint-tool";

export class ToolFactory {

    constructor(
        private colorService: ColorService,
        private drawAreaService: DrawAreaService
    ) {}

    createPaintTool(): BaseTool {
        return new PaintTool(this.drawAreaService, this.colorService);
    }

    createEraseTool(): BaseTool {
        return new EraseTool(this.drawAreaService);
    }

    createFillTool(): BaseTool {
        return new FillTool(this.drawAreaService, this.colorService);
    }

    createColorPicker(): BaseTool {
        return new ColorPickerTool(this.drawAreaService, this.colorService);
    }

    getToolsArray(): BaseTool[] {
       return [
        this.createPaintTool(),
        this.createEraseTool(),
        this.createFillTool(),
        this.createColorPicker()
       ]
    }

}
