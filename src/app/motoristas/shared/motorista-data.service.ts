import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Motorista } from './motorista';

@Injectable({
  providedIn: 'root'
})
export class MotoristaDataService {

  private motoristaSource = new BehaviorSubject({ motorista: null, key: '' });
  currentMotorista = this.motoristaSource.asObservable();

  constructor() { }

  changeMotorista(motorista: Motorista, key: string) {
    this.motoristaSource.next({ motorista: motorista, key: key });
  }
}
