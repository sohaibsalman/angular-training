import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';

/**
 * Another example of custom direcive, but this time using renderer2 from angular
 * to access the DOM element. This helps in the use cases where your angular application
 * may not run in browsers, hence will get an error when accessing a DOM element directly.
 */
@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective implements OnInit {
  // @HostBinding decorator allows to bind to the html property for the element the directive is used on
  @HostBinding('style.backgroundColor') backroundColor: string = 'transparent';

  // Inject the ElementRef and Renderer2 as properties in this class
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {}

  // HostListener decorator allows to listen to the HTML events on the element
  @HostListener('mouseenter') onMouseEnter(eventData: Event) {
    // this.renderer.setStyle(
    //   this.elRef.nativeElement, // element to style
    //   'background-color', // css property name
    //   'blue' // css property value
    // );

    this.backroundColor = 'blue';
  }

  @HostListener('mouseleave') onMouseLeave(eventData: Event) {
    // this.renderer.setStyle(
    //   this.elRef.nativeElement, // element to style
    //   'background-color', // css property name
    //   'transparent' // css property value
    // );

    this.backroundColor = 'transparent';
  }
}
