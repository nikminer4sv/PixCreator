import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  @ViewChild("closeButton")
  public closeButton: ElementRef;

  public hide() {
    this.closeButton.nativeElement.click();
  }

}
