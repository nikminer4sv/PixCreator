import { Component, Input, OnInit } from '@angular/core';
import { ColorService } from '../services/color.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Input() color: string = "white";

  constructor(private colorService: ColorService) { }

  ngOnInit(): void {
    this.colorService.setColor(this.color);
  }

  changeColor(e: any) {
    this.colorService.setColor(this.color);
    this.colorService.getColor().subscribe(c => console.log(c));
  }

}
