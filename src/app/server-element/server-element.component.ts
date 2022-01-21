import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-server-element',
    templateUrl: './server-element.component.html',
    styleUrls: ['./server-element.component.css'],

    // View encapsulation allows css to be applied only to the elements defined in the components.
    // It won't affect the global css styling. This is done by angular by adding attribute to each
    // HTML element in the component e.g p[ng-ego-1]
    encapsulation: ViewEncapsulation.Emulated, // Default is emulated, we can set None and ShadowDom
})
export class ServerElementComponent implements OnInit {
    /**
     * Creating a custom property that will be used by the parent to bind the data.
     * The Input() declarator tells the property that it can be used outside of this component.
     * This allows to pass data from parent to child component.
     *
     * We can give an alias to property if we want a different name in parent module to bind.
     * For example, we can use element as property name in our .ts file, but we want serverElement
     * as a name of property in the parent component. This can be done by giving Input() declarator
     * an argument i.e. @Input('serverElement')
     */
    @Input('serverElement')
    element!: { type: string; name: string; content: string };

    constructor() {}

    ngOnInit(): void {}
}
