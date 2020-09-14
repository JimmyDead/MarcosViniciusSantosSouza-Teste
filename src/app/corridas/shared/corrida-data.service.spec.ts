import { TestBed } from '@angular/core/testing';

import { CorridaDataService } from './corrida-data.service';

describe('CorridaDataService', () => {
  let service: CorridaDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CorridaDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
