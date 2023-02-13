import { Component, Input, OnInit } from '@angular/core';
import { AlphaChannel, OutputFormat } from 'ngx-color-picker';
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

  @Input() color: string = "rgba(255,255,255,1)";
  toolsArray: BaseTool[] = [];
  rgba: OutputFormat = "rgba";
  alphaChannelValue: AlphaChannel = "always";

  constructor(
    private deps: ToolDependencies,
    private toolService: ToolService,
  ) { }

  ngOnInit(): void {
    this.deps.colorService.color = this.color;
    let toolFactory: ToolFactory = new ToolFactory(this.deps);
    this.toolsArray = toolFactory.getToolsArray();
    this.deps.colorService.color$.subscribe(color => this.color = color);
  }

  changeColor(e: any) {
    this.deps.colorService.color = this.color;
  }

  setTool(tool: BaseTool) {
    this.toolService.setAction(tool);
  }

}
