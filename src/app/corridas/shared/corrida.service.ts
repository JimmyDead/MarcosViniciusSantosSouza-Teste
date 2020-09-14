import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { Corrida } from './corrida';

@Injectable({
  providedIn: 'root'
})
export class CorridaService {

  constructor(private dataBaseFire: AngularFireDatabase) { }

  insert(corrida: Corrida) {
    this.dataBaseFire.list('corrida').push(corrida)
      .then((result: any) => {
        console.log(result.key);
      });
  }

  update(corrida: Corrida, key: string) {
    this.dataBaseFire.list('corrida').update(key, corrida)
      .catch((error: any) => {
        console.error(error);
      });
  }

  getAll() {
    return this.dataBaseFire.list('corrida')
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(c => ({ key: c.payload.key, ...c.payload.val() as {} }));
        })
      )
  }

  delete(key: string) {
    this.dataBaseFire.object(`corrida/${key}`).remove();
  }
}
