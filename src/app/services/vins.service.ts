import { Injectable } from '@angular/core';
import { Vin } from '../models/vin.model';
import { Subject } from 'rxjs/internal/Subject';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class VinsService {

  vins: Vin[] = [];
  vinsSubject = new Subject<Vin[]>();

  emitVins() {
    this.vinsSubject.next(this.vins);
  }
  constructor() {
    this.getVins();
   }

  saveVins() {
    firebase.database().ref('/vins').set(this.vins);
  }

  getVins() {
    firebase.database().ref('/vins').on('value', function(dataSnapshot) {
      this.books = dataSnapshot.val() ? dataSnapshot.val() : [];
      this.emitBooks();
    });
  }

  getSingleVin(id: number) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/vins/' + id).once('value')
        // tslint:disable-next-line: only-arrow-functions
        .then(function(dataSnapshot) {
          resolve(dataSnapshot.val());
        }, (error) => {
          reject(error);
        });
      }
    );
  }

  createNewBook(newVin: Vin) {
    this.vins.push(newVin);
    this.saveVins();
    this.emitVins();
  }

  removeBook(vin: Vin) {
    const vinIndexToRemove = this.vins.findIndex(
      (vinEl) => {
        if(vinEl === vin) {
          return true;
        }
      }
    );
    this.vins.splice(vinIndexToRemove, 1);
    this.saveVins();
    this.emitVins();
  }
}
