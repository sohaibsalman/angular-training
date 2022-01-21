import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Server } from '../server.model';

@Component({
    selector: 'app-cockpit',
    templateUrl: './cockpit.component.html',
    styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent implements OnInit {
    newServerContent = '';

    @Output() serverCreated = new EventEmitter<Server>();
    @Output() blueprintCreated = new EventEmitter<Server>();

    constructor() {}

    ngOnInit(): void {}

    onAddServer(inputName: HTMLInputElement) {
        this.serverCreated.emit(new Server('', inputName.value, this.newServerContent));
    }

    onAddBlueprint(inputName: HTMLInputElement) {
        this.blueprintCreated.emit(new Server('', inputName.value, this.newServerContent));
    }
}
