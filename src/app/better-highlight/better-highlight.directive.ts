import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

/**
 * Another example of custom direcive, but this time using renderer2 from angular
 * to access the DOM element. This helps in the use cases where your angular application
 * may not run in browsers, hence will get an error when accessing a DOM element directly.
 */
@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective implements OnInit {
  // Inject the ElementRef and Renderer2 as properties in this class
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.setStyle(
      this.elRef.nativeElement, // element to style
      'background-color', // css property name
      'blue' // css property value
    );
  }
}
