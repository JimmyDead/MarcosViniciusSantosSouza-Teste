import { TestBed } from '@angular/core/testing';

import { PassageiroService } from './passageiro.service';

describe('PassageiroService', () => {
  let service: PassageiroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PassageiroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
