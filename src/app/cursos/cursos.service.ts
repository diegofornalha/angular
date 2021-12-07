import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor() { }

  getCursos() {
    return [
      {id: 1, nome: 'Angular 2'},
      {id: 2, nome: 'Java'},
      {id: 3, nome: 'C#'},
      {id: 4, nome: 'PHP'},
      {id: 5, nome: 'Python'}
    ];
  }

}
