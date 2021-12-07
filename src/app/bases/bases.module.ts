import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasesComponent } from './bases.component';
import { BaseAngularComponent } from './base-angular/base-angular.component';

@NgModule({
  imports: [
  CommonModule
  ],
  declarations: [
  BasesComponent,
  BaseAngularComponent,
  ],
  exports: [
  BasesComponent,
  ]
})
export class BasesModule { }
