import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FichaDirective } from './ficha.directive';

@NgModule({
  declarations: [
    FichaDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [FichaDirective]
})
export class FichaModule { }
