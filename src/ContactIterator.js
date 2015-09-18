/**
 * Created by antony on 18/09/15.
 */
var Contact = Contact || {};

Contact = ( function (self) {
    "use strict";

    self.ContactIterator = function (_contacts) {
        var contacts;
        var index;
        var total;

        this.next = function () {
            var element;

            if (!this.hasNext()) {
                element = null;
            }
            else {
                element = contacts[index];
                index += 1;
            }

            return element;
        };

        this.hasNext = function () {
            return index < total;
        };

        this.rewind = function () {
            index = 0;
            return contacts[0];
        };

        this.first = function () {
            return contacts[0];
        };

        this.current = function () {
            return contacts[index];
        };

        var init = function (_contact) {
            contacts = [];
            for (var contact in _contact) {
                if (_contact.hasOwnProperty(contact)) contacts.push(_contact[contact]);
            }
            index = 0;
            total = contacts.length;
        };

        init(_contacts);
    };

    return self;
}(Contact || {}) );