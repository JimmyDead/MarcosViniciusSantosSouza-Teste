import { TestBed } from '@angular/core/testing';

import { CorridaService } from './corrida.service';

describe('CorridaService', () => {
  let service: CorridaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CorridaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
