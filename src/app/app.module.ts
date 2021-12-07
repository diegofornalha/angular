import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Components } from './components/components';
import { PrincipalComponent } from './components/principal/principal.component';
import { SecundarioComponent } from './components/secundario/secundario.component';

import { CursosModule } from './cursos/cursos.module';
import { BaseComponent } from './base/base.component';

@NgModule({
  declarations: [
    AppComponent,
    Components,
    PrincipalComponent,
    SecundarioComponent,
    BaseComponent,
   ],
  imports: [
    BrowserModule,
    CursosModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
