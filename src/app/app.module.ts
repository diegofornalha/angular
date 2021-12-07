import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Components } from './components/components';
import { PrincipalComponent } from './components/principal/principal.component';

import { CursosModule } from './cursos/cursos.module';


@NgModule({
  declarations: [
    AppComponent,
    Components,
    PrincipalComponent,

   ],
  imports: [
    BrowserModule,
    CursosModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
