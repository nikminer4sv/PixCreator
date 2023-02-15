import { Component, HostListener, Input, OnInit } from '@angular/core';
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

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (this.shortcuts.includes(event.key, 0)) {
      let index = this.shortcuts.indexOf(event.key);
      this.toolClickAction(this.toolsArray[index], index);
    }
  }

  @Input() color: string = "rgba(255,255,255,1)";
  shortcuts: string[] = [];
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

    for (let tool of this.toolsArray)
      this.shortcuts.push(tool.shortcut);
  }

  changeColor(e: any) {
    this.deps.colorService.color = this.color;
  }

  toolClickAction(tool: BaseTool, id: any) {
    this.toolService.setAction(tool);
    this.updateChoose(id);
  }

  setTool(tool: BaseTool) {
    this.toolService.setAction(tool);
  }

  private choosed: any = undefined;
  updateChoose(id: any) {
    if (this.choosed != undefined) {
      let lastTool = document.getElementById(this.choosed);
      lastTool?.classList.remove("active");
    }
    let element = document.getElementById(id);
    element?.classList.add("active");
    this.choosed = id;
  }

}
