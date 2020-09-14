import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Passageiro } from './passageiro';

@Injectable({
  providedIn: 'root'
})
export class PassageiroDataService {

  private passageiroSource = new BehaviorSubject({ passageiro: null, key: '' });
  currentPassageiro = this.passageiroSource.asObservable();

  constructor() { }

  changePassageiro(passageiro: Passageiro, key: string) {
    this.passageiroSource.next({ passageiro: passageiro, key: key });
  }
}
