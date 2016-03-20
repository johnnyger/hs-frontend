System.register(['angular2/core', './connection.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, connection_service_1;
    var ConnectionListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (connection_service_1_1) {
                connection_service_1 = connection_service_1_1;
            }],
        execute: function() {
            ConnectionListComponent = (function () {
                function ConnectionListComponent(_connectionService) {
                    this._connectionService = _connectionService;
                }
                ConnectionListComponent.prototype.ngOnInit = function () { this.getConnections(); };
                ConnectionListComponent.prototype.getConnections = function () {
                    var _this = this;
                    this._connectionService.getConnections()
                        .subscribe(function (connections) { return _this.connections = connections; }, function (error) { return _this.errorMessage = error; });
                };
                ConnectionListComponent = __decorate([
                    core_1.Component({
                        selector: 'connection-list',
                        template: "\n  <h3>Connections:</h3>\n  <ul>\n    <li *ngFor=\"#connection of connections\">\n      {{ connection.number }} -> {{ connection.direction }}, Abfahrt: {{ connection.depTime }} ({{ connection.delay }})\n    </li>\n  </ul>\n  <div class=\"error\" *ngIf=\"errorMessage\">{{errorMessage}}</div>\n  ",
                        styles: ['.error {color:red;}']
                    }), 
                    __metadata('design:paramtypes', [connection_service_1.ConnectionService])
                ], ConnectionListComponent);
                return ConnectionListComponent;
            }());
            exports_1("ConnectionListComponent", ConnectionListComponent);
        }
    }
});
//# sourceMappingURL=conntection-list.component.js.map