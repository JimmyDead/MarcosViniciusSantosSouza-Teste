import { Component, OnInit } from '@angular/core';
import { PassageiroService } from '../shared/passageiro.service';
import { Observable } from 'rxjs';
import { PassageiroDataService } from '../shared/passageiro-data.service';

@Component({
  selector: 'app-list-passageiro',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponentPassageiro implements OnInit {
  passageiros: Observable<any>;

  constructor(private passageiroService: PassageiroService,
    private passageiroDataService: PassageiroDataService) { }

  ngOnInit(): void {
    this.passageiros = this.passageiroService.getAll();
  }

}
