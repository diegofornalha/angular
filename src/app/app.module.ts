import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Components } from './components/components';
import { PrincipalComponent } from './components/principal/principal.component';
import { SecundarioComponent } from './components/secundario/secundario.component';

import { CursosModule } from './cursos/cursos.module';
import { BasesModule } from './bases/bases.module';

@NgModule({
  declarations: [
    AppComponent,
    Components,
    PrincipalComponent,
    SecundarioComponent,
   ],
  imports: [
    BrowserModule,
    CursosModule,
    BasesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
