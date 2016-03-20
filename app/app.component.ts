import {Component} from 'angular2/core';
import {HTTP_PROVIDERS}    from 'angular2/http';

import {Connection}        from './connection';
import {ConnectionListComponent} from './conntection-list.component';
import {ConnectionService}       from './connection.service';

@Component({
    selector: 'my-app',
    template: `
              <h1>Connections at Turmstr. / Rathenower Str.</h1>
              <connection-list></connection-list>
              `,
    directives:[ConnectionListComponent],
    providers: [
        HTTP_PROVIDERS,
        ConnectionService,
    ]
})
export class AppComponent { }