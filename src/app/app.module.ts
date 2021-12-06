import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MeuPrimeiroComponente } from './meu-primeiro/meu-primeiro.component';
import { MeuSegundoComponente } from './meu-segundo/meu-segundo.component';
import { MeuTerceiroComponent } from './meu-terceiro/meu-terceiro.component';


@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponente,
    MeuSegundoComponente,
    MeuTerceiroComponent,
   ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
