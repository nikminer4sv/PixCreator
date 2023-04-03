import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { DrawAreaService } from '../../../../shared/services/draw-area.service';

@Component({
  selector: 'app-draw-area',
  templateUrl: './draw-area.component.html',
  styleUrls: ['./draw-area.component.scss']
})

export class DrawAreaComponent implements OnInit {

  @ViewChild('paintlayer', { static: true }) paintLayer: ElementRef<HTMLCanvasElement>;
  @ViewChild('hoverlayer', { static: true }) hoverLayer: ElementRef<HTMLCanvasElement>;

  constructor(
    private drawAreaService: DrawAreaService,
  ) {}

  ngOnInit(): void {
    const ctx = this.paintLayer.nativeElement.getContext('2d');
    const hoverCtx = this.hoverLayer.nativeElement.getContext('2d');
    if (ctx != null && hoverCtx != null) {
      this.drawAreaService.hoverContext = hoverCtx;
      this.drawAreaService.context = ctx;
    } else {
      console.error("canvas error");
    }
  }

}
