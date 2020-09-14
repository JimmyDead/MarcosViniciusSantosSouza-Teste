import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Motorista } from './motorista';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MotoristaService {

  constructor(private dataBaseFire: AngularFireDatabase) { }

  insert(motorista: Motorista) {
    this.dataBaseFire.list('motorista').push(motorista)
      .then((result: any) => {
        console.log(result.key);
      });
  }

  update(motorista: Motorista, key: string) {
    this.dataBaseFire.list('motorista').update(key, motorista)
      .catch((error: any) => {
        console.error(error);
      });
  }

  getAll() {
    return this.dataBaseFire.list('motorista')
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(c => ({ key: c.payload.key, ...c.payload.val() as {} }));
        })
      )
  }

  delete(key: string) {
    this.dataBaseFire.object(`motorista/${key}`).remove();
  }
}
