import { Component, ElementRef, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {DrawAreaService} from "../../services/draw-area.service";
import {FirebaseService} from "../../services/firebase.service";
import {ModalComponent} from "../modal/modal.component";
import {faSpinner, IconDefinition} from "@fortawesome/free-solid-svg-icons";
import {LoadingButtonService} from "../../services/loading-button.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @ViewChild("modalWindow")
  public modalWindow: ModalComponent;

  @ViewChild("contentImage")
  public contentImage: ElementRef;

  @ViewChild("titleInput")
  public titleInput: ElementRef;

  @ViewChild("pushButton", {static: true})
  public pushButton: ElementRef;

  public spinnerIcon: IconDefinition = faSpinner

  public isLoading = false;
  public showButtonText = true;

  constructor(
    public router: Router,
    private drawAreaService: DrawAreaService,

    public fb: FirebaseService,

    public loadingService: LoadingButtonService,
  ) {

  }

  public async pushToGallery(title: string): Promise<void> {

    this.loadingService.loading = true;
    this.pushButton.nativeElement.style.paddingTop = "15px";
    this.fb.pushToGallery(title).subscribe({
      next:async () => {
        this.pushButton.nativeElement.style.paddingTop = "0";
        this.modalWindow.hide();
        await this.sleep(500);
        this.loadingService.loading = false;
        this.titleInput.nativeElement.value = "";
      },
      error: async () => {
        this.pushButton.nativeElement.style.paddingTop = "0";
        this.loadingService.loading = false;
        const currentColor = this.pushButton.nativeElement.style.backgroundColor;
        this.pushButton.nativeElement.style.backgroundColor = "red";
        this.pushButton.nativeElement.disabled = true;
        this.showButtonText = false;
        await this.sleep(3000);
        this.pushButton.nativeElement.style.backgroundColor = currentColor;
        this.pushButton.nativeElement.disabled = false;
        this.showButtonText = true;
      }
    });
  }

  public setImage(): void {
    this.contentImage.nativeElement.src = this.drawAreaService.context.canvas.toDataURL();
  }

  private async sleep(delay: number) {
    return new Promise(resolve => setTimeout(resolve, delay));
  }


}
