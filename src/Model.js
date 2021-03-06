/**
 * Created by antony on 18/09/15.
 */
var Contact = Contact || {};

Contact = ( function (self) {
    "use strict";


    self.Model = function () {

        this.getContactsInLocalStorage = function () {
            var contacts = [];
            for (var i = 0; i < localStorage.length; i++) {
                contacts.push(localStorage.getItem(localStorage.key(i)));
            }
            return contacts;
        };

        this.deleteContact = function (contactId) {
            Contact.Contacts.instance().remove(contactId);
            localStorage.removeItem('contacts/' + contactId);
        };
    };

    return self;
}(Contact || {}) );
