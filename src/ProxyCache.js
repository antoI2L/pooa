/**
 * Created by antony on 10/09/15.
 */
var Contact = Contact || {};

Contact = ( function (self) {
    "use strict";

    self.ProxyCache = function (_listContacts) {
        var listContacts = [];
        var cache = {};
        var that = this;

        this.search = function (strategy) {
            if (this.inCache(strategy)) {
                return cache[strategy];
            }

            var res = null;
            for (var i = 0; i < listContacts.length; i++) {
                res = listContacts[i].search(strategy);

                if (res !== null) {
                    cache[strategy] = res;
                    break;
                }
            }

            return res;
        };

        this.inCache = function (strategy) {
            return cache.hasOwnProperty(strategy)
        };

        this.update = function (strategy) {
            if (this.inCache(strategy)) {
                cache[strategy] = null;
            }
        };

        var init = function (_listContacts) {
            for (var i = 0; i < _listContacts.length; i++) {
                listContacts.push(_listContacts[i]);
                _listContacts[i].attach(that);
            }
        };

        init(_listContacts);
    };


    return self;
}(Contact || {}) );