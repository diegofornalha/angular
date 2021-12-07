import { Component } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',

})

export class CursosComponent  {

  nomePortal: string;
  constructor() {
  this.nomePortal = 'https://loiane.training';
  }
  cursos = [
    {nome: 'Angular 2', url: 'https://loiane.training/curso/angular'},
    {nome: 'Java Básico', url: 'https://loiane.training/curso/java-basico'},
    {nome: 'Java Intermediário', url: 'https://loiane.training/curso/java-intermediario'},
    {nome: 'Crud Angular Spring', url: 'http://loiane.training/curso/crud-angular-spring'},
    {nome: 'Fundamentos ExtJS 4', url: 'https://loiane.training/curso/fundamentos-ext-js-4'},
    {nome: 'Phonegap Apache Cordova', url: 'https://loiane.training/curso/phonegap-apache-cordova'},
    {nome: 'Estrutura de Dados', url: 'https://loiane.training/curso/estrutura-de-dados'},
  ];
}