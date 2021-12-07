import { Component } from '@angular/core';
import { Carro } from 'src/app/components/classes/carro';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
})

export class PrincipalComponent {
  carros = [
    new Carro('Fusca', 2),
    new Carro('Gol', 4),
    new Carro('Palio', 2),
  ];
}
