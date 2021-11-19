import { TestBed } from '@angular/core/testing';

import { ApiListaService } from './api-lista.service';

describe('ApiListaService', () => {
  let service: ApiListaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiListaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
