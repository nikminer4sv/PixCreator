import { Component, Input, OnInit } from '@angular/core';
import { ColorService } from '../services/color.service';
import { ToolService } from '../services/tool.service';
import { ITool } from './tool';
import { IToolFactory, ToolFactory } from './tool-factory';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Input() color: string = "white";
  toolsArray: ITool[] = [];

  constructor(
    private colorService: ColorService,
    private toolService: ToolService
  ) { }

  ngOnInit(): void {
    this.colorService.color = this.color;
    let toolFactory: IToolFactory = new ToolFactory();
    this.toolsArray = toolFactory.getToolsArray();
  }

  changeColor(e: any) {
    this.colorService.color = this.color;
  }

  setToolAction(toolAction: Function) {
    this.toolService.setAction(toolAction);
  }

}
