import { Component, HostListener, Input, OnInit } from '@angular/core';
import { AlphaChannel, OutputFormat } from 'ngx-color-picker';
import { ColorService } from '../../services/color.service';
import { DrawAreaService } from '../../services/draw-area.service';
import { ToolService } from '../../services/tool.service';
import { BaseTool } from '../../models/tools/base-tool';
import { ToolFactory } from '../../models/tools/tool-factory';

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
    private drawAreaService: DrawAreaService,
    private toolService: ToolService,
    private colorService: ColorService
  ) { }

  ngOnInit(): void {
    this.colorService.color = this.color;
    let toolFactory: ToolFactory = new ToolFactory(this.colorService, this.drawAreaService);
    this.toolsArray = toolFactory.getToolsArray();
    this.colorService.color$.subscribe(color => this.color = color);

    for (let tool of this.toolsArray)
      this.shortcuts.push(tool.shortcut);
  }

  changeColor(e: any) {
    this.colorService.color = this.color;
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
