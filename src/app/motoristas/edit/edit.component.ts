import { Component, OnInit } from '@angular/core';
import { Motorista } from '../shared/motorista';
import { MotoristaService } from '../shared/motorista.service';
import { MotoristaDataService } from '../shared/motorista-data.service';

@Component({
  selector: 'app-edit-motorista',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponentMotorista implements OnInit {
  motorista: Motorista;
  key: string = '';


  constructor(private motoristaService: MotoristaService,
    private motoristaDataService: MotoristaDataService) { }

  ngOnInit(): void {

    this.motorista = new Motorista();
    this.motoristaDataService.currentMotorista.subscribe(data => {
      if (data.motorista && data.key) {
        this.motorista = new Motorista();
        this.motorista.nome = data.motorista.nome;
        this.motorista.dataNascimento = data.motorista.dataNascimento;
        this.motorista.cpf = data.motorista.cpf;
        this.motorista.modeloCarro = data.motorista.modeloCarro;
        this.motorista.status = data.motorista.status;
        this.motorista.sexo = data.motorista.sexo;
        this.key = data.key;
      }
    })
  }



  onSubmit() {

    if (this.key) {
      this.motoristaService.update(this.motorista, this.key);
      alert("Alterado com sucesso!");
    } else {
      this.motoristaService.insert(this.motorista);
      alert("Cadastrado com sucesso!");
    }

    this.motorista = new Motorista();
  }


}
