import { Component, OnInit } from '@angular/core';
import { Motorista } from './../shared/motorista';
import { MotoristaService } from '../shared/motorista.service';
import { Observable } from 'rxjs';
import { MotoristaDataService } from '../shared/motorista-data.service';

@Component({
  selector: 'app-list-motorista',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponentMotorista implements OnInit {
  motoristas: Observable<any>;

  constructor(private motoristaService: MotoristaService,
    private motoristaDataService: MotoristaDataService) { }

  ngOnInit(): void {
    this.motoristas = this.motoristaService.getAll();
  }

  edit(motorista: Motorista, key: string) {
    this.motoristaDataService.changeMotorista(motorista, key);
  }

}
