/**
 * Created by antony on 11/09/15.
 */

var Contact = Contact || {};

Contact = ( function (self) {
    "use strict";


    self.Chain = function (_handler) {
        var handler;

        this.processRequest = function (request) {
            handler.handle(request);
        };

        var init = function (_handler) {
            handler = _handler;
        };

        init(_handler);
    };

    return self;
}(Contact || {}) );

