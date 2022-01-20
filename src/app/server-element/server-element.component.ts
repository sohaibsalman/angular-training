import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-server-element',
    templateUrl: './server-element.component.html',
    styleUrls: ['./server-element.component.css'],
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
