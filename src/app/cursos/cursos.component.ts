import { CursosService } from './cursos.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
})

export class CursosComponent  {

  nomePortal: string;
  cursos: string[] = ['Angular', 'Java', 'Phonegap'];

  constructor(private cursosService: CursosService) {
    this.nomePortal = 'https://loiane.training';
    this.cursos = this.cursosService.getCursos();
    }
}
