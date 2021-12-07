import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Components } from './components/components';
import { PrincipalComponent } from './components/principal/principal.component';
import { SecundarioComponent } from './components/secundario/secundario.component';


@NgModule({
  declarations: [
    AppComponent,
    Components,
    PrincipalComponent,
    SecundarioComponent,
   ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
