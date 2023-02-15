import { Injectable } from '@angular/core';
import { BaseTool } from '../toolbar/tools/base-tool';
import { ToolDependencies } from '../toolbar/tools/tool-dependencies';

@Injectable({
  providedIn: 'root'
})
export class ToolService {

  private tool: BaseTool;

  constructor(
    private deps: ToolDependencies
  ) { }

  setAction(tool: BaseTool) {
    this.tool = tool;
  }

  execute(e: MouseEvent): void {
    this.tool.execute(e);
  }
}
