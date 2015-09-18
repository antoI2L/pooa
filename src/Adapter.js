/**
 * Created by antony on 11/09/15.
 */
var Contact = Contact || {};

Contact = ( function (self) {
    "use strict";

    var instance = null;

    var Singleton = function () {

        var contacts;

        this.clear = function () {
            instance = null;
        };

        this.size = function () {
            return contacts.size();
        };

        this.save = function () {
            localStorage.clear();
            var iterator = new Contact.ContactIterator(contacts.list);

            while (iterator.hasNext()) {
                var contact = iterator.current();
                localStorage.setItem('contact : ' + contact.id(), contact);
                iterator.next();
            }
        };

        this.contacts = function () {
            return contacts;
        };

        var init = function () {
            contacts = Contact.Contacts;
        };

        init();
    };

    self.Adapter = {
        instance: function () {
            if (instance === null) {
                instance = new Singleton();
            }

            return instance;
        }
    };

    return self;
}(Contact || {}) );