import { Component, Input, OnInit } from '@angular/core';
import { ToolService } from '../services/tool.service';
import { BaseTool } from './tools/base-tool';
import { ToolDependencies } from './tools/tool-dependencies';
import { ToolFactory } from './tools/tool-factory';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {

  @Input() color: string = "white";
  toolsArray: BaseTool[] = [];

  constructor(
    private deps: ToolDependencies,
    private toolService: ToolService,
  ) { }

  ngOnInit(): void {
    this.deps.colorService.color = this.color;

    let toolFactory: ToolFactory = new ToolFactory(this.deps);
    this.toolsArray = toolFactory.getToolsArray();
  }

  changeColor(e: any) {
    this.deps.colorService.color = this.color;
  }

  setTool(tool: BaseTool) {
    this.toolService.setAction(tool);
  }

}
