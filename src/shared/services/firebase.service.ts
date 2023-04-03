import { Injectable } from '@angular/core';
import {dataURLtoBlob} from "../utils/image-utils";
import {DrawAreaService} from "./draw-area.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(
    private drawAreaService: DrawAreaService,
    private http: HttpClient,
  ) {
  }

  headerDict = {
    'Access-Control-Allow-Origin':"*",
    'Access-Control-Allow-Credentials':"true",
  };
  requestOptions = {
    headers: new HttpHeaders(this.headerDict)
  };

  public pushToGallery(title: string): Observable<object>{
    const image = dataURLtoBlob(this.drawAreaService.context.canvas.toDataURL());
    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", title);
    return this.http.post("http://pixcreatorpresentation-env.eba-5m7amdfi.us-east-1.elasticbeanstalk.com/gallery", formData, this.requestOptions);
  }

}
