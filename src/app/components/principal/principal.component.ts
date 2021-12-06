import { Component } from '@angular/core';
import { Carro } from 'src/app/classes/carro';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
})

// tslint:disable-next-line: component-class-suffix
export class PrincipalComponent {

  carros = [
    new Carro('Fusca', 2),
    new Carro('Gol', 4),
    new Carro('Palio', 2),
  ];
}
