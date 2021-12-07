import { CursosService } from './cursos.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
})

export class CursosComponent  {

  nomePortal: string;
  cursos: string;

  constructor(private cursosService: CursosService) {
    this.nomePortal = 'https://loiane.training';
    }
}
