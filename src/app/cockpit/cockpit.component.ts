import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Server } from '../server.model';

@Component({
    selector: 'app-cockpit',
    templateUrl: './cockpit.component.html',
    styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent implements OnInit {
    newServerName = '';
    newServerContent = '';

    @Output() serverCreated = new EventEmitter<Server>();
    @Output() blueprintCreated = new EventEmitter<Server>();

    constructor() {}

    ngOnInit(): void {}

    onAddServer() {
        this.serverCreated.emit(
            new Server("", this.newServerName, this.newServerContent) 
        );
    }

    onAddBlueprint() {
        this.blueprintCreated.emit(
            new Server("", this.newServerName, this.newServerContent)
        );
    }
}
