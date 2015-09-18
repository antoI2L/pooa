/**
 * Created by antony on 10/09/15.
 */
var Contact = Contact || {};

Contact = ( function (self) {
    "use strict";

    self.Contacts = {
        len: 0,
        list: {},
        instance: function () {
            return Contact.Contacts;
        },
        clear: function () {
            Contact.Contacts.len = 0;
            Contact.Contacts.list = {};
        },
        size: function () {
            return Contact.Contacts.len;
        },
        add: function (contact) {
            Contact.Contacts.list[contact.id()] = contact;
            Contact.Contacts.len += 1;
        },
        get: function (contactId) {
            return Contact.Contacts.list[contactId];
        },
        search: function (strategy) {
            return strategy.search(Contact.Contacts.list);
        },
        getFromName: function (prenom, nom) {
            var contacts = [];

            for (var row in Contact.Contacts.list) {
                var contact = Contact.Contacts.list[row];

                if (contact.firstName() === prenom && contact.lastName() === nom) {
                    contacts.push(contact);
                }
            }

            if (contacts.length === 0) return null;
            if (contacts.length === 1) return contacts[0];

            return contacts;
        },
        remove: function (contactId) {
            delete Contact.Contacts.list[contactId];
            Contact.Contacts.len -= 1;
        },
        iterator: function () {
            return new Contact.ContactIterator(Contact.Contacts.list);
        }
    };

    self.Contacts2 = function () {
        var len = 0;
        var list = {};
        var observers = [];

        this.getList = function () {
            return list;
        };

        this.add = function (contact) {
            list[contact.id()] = contact;
            len += 1;
        };

        this.search = function (strategy) {
            return strategy.search(list);
        };

        this.attach = function (object) {
            observers.push(object);
        };

        this.clear = function () {
            len = 0;
            list = {};
        };

        this.size = function () {
            return len;
        };

        this.change = function (strategy) {
            for (var i = 0; i < observers.length; i++) {
                observers[i].update(strategy.strategy());
            }
        };
    };

    return self;

}(Contact || {}));