import { Injectable } from '@angular/core';
import { ColorService } from './color.service';
import { DrawAreaService } from './draw-area.service';

@Injectable()
export class ToolDependecies {
  constructor(
    public colorService: ColorService,
  ) { }
}


@Injectable({
  providedIn: 'root'
})
export class ToolService {

  private action: Function = () => console.log("base action");

  constructor(
    private drawAreaService: DrawAreaService,
    private deps: ToolDependecies
  ) { }

  setAction(action: Function) {
    this.action = action;
  }

  execute(e: any): void {
    this.action(this.drawAreaService.context, e, this.deps);
  }
}
