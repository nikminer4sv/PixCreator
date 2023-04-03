import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from "@angular/fire/compat/database";
import {Observable} from "rxjs";
import {Card} from "../models/card";

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  public cards: AngularFireList<Card>

  constructor(
    private db: AngularFireDatabase,
  ) { }

  public getCards(): Observable<Card[]> {
    this.cards = this.db.list("Gallery");
    return this.cards.valueChanges();
  }

}
