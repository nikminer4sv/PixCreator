import { Component, OnInit} from '@angular/core';
import {Card} from "./models/card";
import {FirestoreService} from "./services/firestore.service";
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit{

  public cards: Card[];

  constructor(
    private db: FirestoreService,
  ) {
  }

  ngOnInit(): void {
    this.db.getCards().subscribe(cards => {this.cards = cards.reverse()});
  }



}
