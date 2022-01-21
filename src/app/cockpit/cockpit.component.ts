import { Component, EventEmitter, OnInit, Output, ViewChild, ElementRef } from '@angular/core';

import { Server } from '../server.model';

@Component({
    selector: 'app-cockpit',
    templateUrl: './cockpit.component.html',
    styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent implements OnInit {
    // Get local reference from the template file in .ts file
    @ViewChild('serverContentInput', { static: true }) serverContent!: ElementRef;

    @Output() serverCreated = new EventEmitter<Server>();
    @Output() blueprintCreated = new EventEmitter<Server>();

    constructor() {}

    ngOnInit(): void {}

    onAddServer(inputName: HTMLInputElement) {
        this.serverCreated.emit(new Server('', inputName.value, this.serverContent.nativeElement.value));
    }

    onAddBlueprint(inputName: HTMLInputElement) {
        this.blueprintCreated.emit(new Server('', inputName.value, this.serverContent.nativeElement.value));
    }
}
