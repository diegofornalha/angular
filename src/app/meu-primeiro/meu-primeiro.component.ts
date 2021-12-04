import { Component } from '@angular/core';
import { Carro } from '../carro';

@Component({
  selector: 'app-meu-primeiro-componente',
  templateUrl: './meu-primeiro.component.html',
})

// tslint:disable-next-line: component-class-suffix
export class MeuPrimeiroComponente {

  carros = [
    new Carro('Fusca', 2),
    new Carro('Gol', 4),
    new Carro('Palio', 2),
  ];
}
