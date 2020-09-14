import { Component, OnInit } from '@angular/core';
import { Corrida } from '../shared/corrida';
import { CorridaService } from '../shared/corrida.service';
import { CorridaDataService } from '../shared/corrida-data.service';

@Component({
  selector: 'app-edit-corrida',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponentCorrida implements OnInit {
  corrida: Corrida;
  key: string = '';

  constructor(private corridaService: CorridaService,
    private corridaDataService: CorridaDataService) { }

  ngOnInit(): void {
    this.corrida = new Corrida();
    /*
    this.corridaDataService.currentCorrida.subscribe(data => {
      if (data.corrida && data.key) {
        this.corrida = new Corrida();
        this.corrida.nomeMotorista = data.corrida.nomeMotorista;
        this.corrida.nomePassageiro = data.corrida.nomePassageiro;
        this.corrida.valorCorrida = data.corrida.valorCorrida;
        this.key = data.key;
      }
    })
    */
  }

  onSubmit() {
    if (this.key) {
      // this.corridaService.update(this.corrida, this.key);
    } else {
      this.corridaService.insert(this.corrida);
      alert("Corrida Registrada!");
    }

    this.corrida = new Corrida();
  }



}
