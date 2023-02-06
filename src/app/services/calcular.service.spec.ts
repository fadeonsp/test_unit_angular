import { TestBed } from '@angular/core/testing';

import { CalcularService } from './calcular.service';

describe('CalcularService', () => {
  let service: CalcularService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalcularService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should subtrair valor atual a 10 para resultado igual a 9', () => {
    let num = 10;

    num = service.removerValor(num);

    expect(num).toBeTruthy();
    expect(num).toEqual(9);
  });


});
