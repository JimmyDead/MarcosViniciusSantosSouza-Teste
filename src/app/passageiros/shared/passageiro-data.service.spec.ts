import { TestBed } from '@angular/core/testing';

import { PassageiroDataService } from './passageiro-data.service';

describe('PassageiroDataService', () => {
  let service: PassageiroDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PassageiroDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
