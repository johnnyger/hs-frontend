/**
 * Created by kai on 20.03.16.
 */
import {Component, OnInit} from 'angular2/core';
import {Connection}        from './connection';
import {ConnectionService} from './connection.service';

@Component({
    selector: 'connection-list',
    template: `
  <h3>Connections:</h3>
  <ul>
    <li *ngFor="#connection of connections">
      {{ connection.number }} -> {{ connection.direction }}, Abfahrt: {{ connection.depTime }} ({{ connection.delay }})
    </li>
  </ul>
  <div class="error" *ngIf="errorMessage">{{errorMessage}}</div>
  `,
    styles: ['.error {color:red;}']
})
export class ConnectionListComponent implements OnInit {
    constructor (private _connectionService: ConnectionService) {}
    errorMessage: string;
    connections:Connection[];
    ngOnInit() { this.getConnections(); }
    getConnections() {
        this._connectionService.getConnections()
            .subscribe(
                connections => this.connections = connections,
                error =>  this.errorMessage = <any>error);
    }
}
