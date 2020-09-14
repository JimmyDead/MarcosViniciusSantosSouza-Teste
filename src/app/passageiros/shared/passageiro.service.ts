import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Passageiro } from './passageiro';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PassageiroService {

  constructor(private dataBaseFire: AngularFireDatabase) { }

  insert(passageiro: Passageiro) {
    this.dataBaseFire.list('passageiro').push(passageiro)
      .then((result: any) => {
        console.log(result.key);
      });
  }

  update(passageiro: Passageiro, key: string) {
    this.dataBaseFire.list('passageiro').update(key, passageiro)
      .catch((error: any) => {
        console.error(error);
      });
  }

  getAll() {
    return this.dataBaseFire.list('passageiro')
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(c => ({ key: c.payload.key, ...c.payload.val() as {} }));
        })
      )
  }

  delete(key: string) {
    this.dataBaseFire.object(`passageiro/${key}`).remove();
  }
}
