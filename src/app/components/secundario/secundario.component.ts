import { Component } from '@angular/core';
import { Carro } from 'src/app/classes/carro';

@Component({
  selector: 'app-secundario',
  templateUrl: './secundario.component.html',
})

export class SecundarioComponent {
  carros = [
    new Carro('Fusca', 2),
    new Carro('Gol', 4),
    new Carro('Palio', 2),
  ];
}
