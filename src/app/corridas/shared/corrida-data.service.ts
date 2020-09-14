import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Corrida } from './corrida';

@Injectable({
  providedIn: 'root'
})
export class CorridaDataService {

  private corridaSource = new BehaviorSubject({ corrida: null, key: '' });
  currentCorrida = this.corridaSource.asObservable();

  constructor() { }

  changeCorrida(corrida: Corrida, key: string) {
    this.corridaSource.next({ corrida: corrida, key: key });
  }
}
