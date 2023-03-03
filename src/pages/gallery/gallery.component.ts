import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Card} from "./models/card";
import {CardComponent} from "./components/card/card.component";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {

  cards: Card[] = [
    {title: "1", content: "23112dqwqd"},
    {title: "2", content: "23112dqwqd"},
    {title: "3", content: "23112dqwqd"},
    {title: "4", content: "23112dqwqd"},
    {title: "5", content: "23112dqwqd"},
    {title: "6", content: "23112dqwqd"},
    {title: "7", content: "23112dqwqd"},
    {title: "8", content: "23112dqwqd"},
    {title: "9", content: "23112dqwqd"},
    {title: "10", content: "23112dqwqd"},
    {title: "11", content: "23112dqwqd"},
    {title: "12", content: "23112dqwqd"},
    {title: "13", content: "23112dqwqd"},
    {title: "14", content: "23112dqwqd"},
    {title: "15", content: "23112dqwqd"},
    {title: "16", content: "23112dqwqd"},
  ]

  public cardsOnPage: number = 8;

}
