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
     */
    @Input()
    element!: { type: string; name: string; content: string };

    constructor() {}

    ngOnInit(): void {}
}
