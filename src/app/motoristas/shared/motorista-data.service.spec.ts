import { TestBed } from '@angular/core/testing';

import { MotoristaDataService } from './motorista-data.service';

describe('MotoristaDataService', () => {
  let service: MotoristaDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MotoristaDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
