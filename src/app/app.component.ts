import { Component } from '@angular/core';
import { Server } from './server.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    serverElements: Server[] = [];
    newServerName = '';
    newServerContent = '';

    onAddServer() {
        this.serverElements.push({
            type: 'server',
            name: this.newServerName,
            content: this.newServerContent,
        });
    }

    onAddBlueprint() {
        this.serverElements.push({
            type: 'blueprint',
            name: this.newServerName,
            content: this.newServerContent,
        });
    }
}
