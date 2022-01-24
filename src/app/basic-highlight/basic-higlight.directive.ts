import { Directive, ElementRef, OnInit } from '@angular/core';

/**
 * Custom directive example. Directive is a ts class with a special declarator
 * @Directive. The @Directive declarotor accepts an object containing the meta-data
 * for the directive.
 */

@Directive({
  // the square brackets are not the part of the selector name, it tells angular
  // to select the directive as an attribute of the element
  selector: '[appBasicHighlight]',
})
export class BasicHighlightDirective implements OnInit {
  // Injecting the reference of html element where the directive was placed on.
  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.elementRef.nativeElement.style.backgroundColor = 'green';
  }
}
