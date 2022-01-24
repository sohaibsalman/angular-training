import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

/**
 * Structural directie example
 */

@Directive({
  selector: '[appUnless]',
})
export class UnlessDirective {
  // Craeting a setter method in typescript for unless property.
  // This method will be executed each time the value of unless
  // is changed
  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      // This will create a view dynamically and add the template ref to that view
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      // this will clear the view container for template ref
      this.vcRef.clear();
    }
  }
  constructor(
    private templateRef: TemplateRef<any>,
    private vcRef: ViewContainerRef
  ) {}
}
