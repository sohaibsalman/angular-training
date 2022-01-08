import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
})
export class ServerComponent {
    serverId = 40;
    serverStatus = 'online';
    
    getServerPort() {
        return 4200;
    }
}