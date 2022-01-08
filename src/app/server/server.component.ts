import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
})
export class ServerComponent {
    serverId = 40;
    serverStatus = '';

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getServerPort() {
        return 4200;
    }

    getColor() {
        return this.serverStatus === 'online' ? 'green' : 'red';     
    }
}