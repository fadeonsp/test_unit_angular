import { Component } from '@angular/core';
import { CalcularService } from '../services/calcular.service';

@Component({
  selector: 'app-calk',
  templateUrl: './calk.component.html',
  styleUrls: ['./calk.component.css']
})
export class CalkComponent  {

  resultado: number = 0;
  mensagem: string = '';

  constructor(private calcular: CalcularService) {

  }

  somarValor(): void {
    this.resultado = this.resultado + 1;
    this.gerarInfo('está somando mais 1')
  }

  subtrairValor(): void {
    this.resultado = this.calcular.removerValor(this.resultado)
    this.gerarInfo('está subtraindo menos 1')
  }
  private gerarInfo(info: string): void {
    this.mensagem = info;
  }

}


