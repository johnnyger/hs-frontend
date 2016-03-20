/**
 * Created by kai on 20.03.16.
 */
import {Injectable}     from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Connection}     from './connection';
import {Observable}     from 'rxjs/Observable';

@Injectable()
export class ConnectionService {
    constructor (private http: Http) {}

    private _connectionsUrl = 'http://localhost:3000/deps';  // URL to web api

    getConnections () {
        return this.http.get(this._connectionsUrl)
            .map(res => <Connection[]> res.json())
            .do(data => console.log(data))
            .catch(this.handleError);
    }
    private handleError (error: Response) {
        // in a real world app, we may send the error to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
