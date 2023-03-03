import { Injectable } from '@angular/core';
import { BaseTool } from '../models/tools/base-tool';

@Injectable({
  providedIn: 'root'
})
export class ToolService {

  private tool: BaseTool;

  constructor() { }

  setAction(tool: BaseTool) {
    this.tool = tool;
  }

  execute(e: MouseEvent): void {
    this.tool.execute(e);
  }
}
