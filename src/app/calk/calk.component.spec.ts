import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalcularService } from '../services/calcular.service';

import { CalkComponent } from './calk.component';

describe('CalkComponent', () => {
  let component: CalkComponent;
  let fixture: ComponentFixture<CalkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalkComponent ],
      providers: [CalcularService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalkComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should adicionar valor + 1 igual a 1', () => {
    fixture.detectChanges();

    component.resultado = 0;
    component.somarValor();

    expect(component.resultado).toBeTruthy();
    expect(component.resultado).toBeGreaterThan(0);
    expect(component.resultado).toEqual(1)
  });

  it('should subtrair valor de 5 para resultado igual a 4', () => {
    fixture.detectChanges();

    const calcular = new CalcularService();

    component.resultado = 5;

    spyOn(calcular, 'removerValor')(component.resultado);

    component.subtrairValor();

    expect(component.resultado).toBeTruthy();
    expect(component.resultado).toBeGreaterThan(0);
    expect(component.resultado).toEqual(4);
    expect(calcular.removerValor).toHaveBeenCalled();
  });

  //it('should subtrair valor e vendo o retorno', () => {
  //  fixture.detectChanges();
   // const calcular = new CalcularService();

   // component.resultado = 5;

   // const valorRetorno = spyOn(calcular, 'removerValor').and.returnValue(5);

   // component.subtrairValor();

   // expect(valorRetorno).toMatch(/\d{1,}/);

 // });
 it('should mostrar mensagem', () => {
  fixture.detectChanges();
  component.mensagem = '';
  component['gerarInfo']('testando')
  expect(component.mensagem).toEqual('testando');
});
});
