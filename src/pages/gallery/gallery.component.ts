import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Card} from "./models/card";
import {CardComponent} from "./components/card/card.component";
import firebase from "firebase/compat";
import firestore = firebase.firestore;
import {FirestoreService} from "./services/firestore.service";
import {
  convertNodeSourceSpanToLoc
} from "@angular-eslint/template-parser/dist/template-parser/src/convert-source-span-to-loc";

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
