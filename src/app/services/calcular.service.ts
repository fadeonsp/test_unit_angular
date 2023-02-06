import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalcularService {

  removerValor(valorAtual: number): number {
    return valorAtual - 1;
  }
}
