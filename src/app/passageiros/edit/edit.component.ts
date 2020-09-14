import { Component, OnInit } from '@angular/core';
import { Passageiro } from '../shared/passageiro';
import { PassageiroService } from '../shared/passageiro.service';
import { PassageiroDataService } from '../shared/passageiro-data.service';

@Component({
  selector: 'app-edit-passageiro',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponentPassageiro implements OnInit {
  passageiro: Passageiro;
  key: string = '';

  constructor(private passageiroService: PassageiroService,
    private passageiroDataService: PassageiroDataService) { }

  ngOnInit(): void {
    this.passageiro = new Passageiro();
    /*
        this.passageiroDataService.currentPassageiro.subscribe(data => {
          
          if (data.passageiro && data.key) {
            this.passageiro = new Passageiro();
            this.passageiro.nome = data.passageiro.nome;
            this.passageiro.dataNascimento = data.passageiro.dataNascimento;
            this.passageiro.cpf = data.passageiro.cpf;
            this.passageiro.sexo = data.passageiro.sexo;
            this.key = data.key;
          }
        })
    */

  }

  onSubmit() {
    if (this.key) {
      //this.passageiroService.update(this.passageiro, this.key);
    } else {
      this.passageiroService.insert(this.passageiro);
      alert("Cadastrado com sucesso!");
    }

    this.passageiro = new Passageiro();
  }



}
