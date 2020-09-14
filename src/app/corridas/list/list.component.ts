import { Component, OnInit } from '@angular/core';
import { CorridaService } from '../shared/corrida.service';
import { Observable } from 'rxjs';
import { CorridaDataService } from '../shared/corrida-data.service';

@Component({
  selector: 'app-list-corrida',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponentCorrida implements OnInit {
  corridas: Observable<any>;

  constructor(private corridaService: CorridaService,
    private corridaDataService: CorridaDataService) { }

  ngOnInit(): void {
    this.corridas = this.corridaService.getAll();
  }

}
