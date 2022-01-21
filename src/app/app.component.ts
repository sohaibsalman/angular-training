import { Component } from '@angular/core';
import { Server } from './server.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    serverElements: Server[] = [{ type: 'server', name: 'Testserver', content: 'Just a test!' }];

    handleAddServer(serverData: Server) {
        this.serverElements.push({
            type: 'server',
            name: serverData.name,
            content: serverData.content,
        });
    }

    handleAddBlueprint(serverData: Server) {
        this.serverElements.push({
            type: 'blueprint',
            name: serverData.name,
            content: serverData.content,
        });
    }
}
