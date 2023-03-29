import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFicha]'
})
export class FichaDirective {

  constructor(public elementRef: ElementRef, public renderer2: Renderer2) {
    const elementHTML = elementRef.nativeElement;
    renderer2.setStyle(elementHTML, 'border-radius', '100px');
    renderer2.setStyle(elementHTML, 'background-color', 'yellow');

  }

}
