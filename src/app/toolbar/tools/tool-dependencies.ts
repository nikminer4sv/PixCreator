import { Injectable } from "@angular/core";
import { ColorService } from "src/app/services/color.service";
import { DrawAreaService } from "src/app/services/draw-area.service";

@Injectable()
export class ToolDependencies {
  constructor(
    public colorService: ColorService,
    public drawAreaService: DrawAreaService
  ) { }
}