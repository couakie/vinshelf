import { Injectable } from '@angular/core';
import { Vin } from '../models/vin.model';
import { Subject } from 'rxjs/internal/Subject';
import * as firebase from 'firebase';
import Datasnapshot = firebase.database.DataSnapshot;

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
    firebase.database().ref('/vins')
      .on('value', (data: Datasnapshot) => {
          this.vins = data.val() ? data.val() : [];
          // tslint:disable-next-line: no-unused-expression
          this.emitVins;
        }
      );
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

  createNewVin(newVin: Vin) {
    this.vins.push(newVin);
    this.saveVins();
    this.emitVins();
  }

  removeVin(vin: Vin) {
    const vinIndexToRemove = this.vins.findIndex(
      (vinEl) => {
        if (vinEl === vin) {
          return true;
        }
      }
    );
    this.vins.splice(vinIndexToRemove, 1);
    this.saveVins();
    this.emitVins();
  }
}
