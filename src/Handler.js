/**
 * Created by antony on 11/09/15.
 */
var Contact = Contact || {};

Contact = ( function (self) {
    "use strict";


    self.Handler = function (_contacts, _handler) {
        var contacts;
        var handler;

        this.handle = function (request) {
            var contact = request.contact();
            if (contacts.size() === 0) {
                contacts.add(contact);
            } else {
                if (contacts.search(new Contact.FromTagSearchStrategy(contact.tag())) !== null) {
                    contacts.add(contact);
                } else {
                    if (handler !== null) handler.handle(request);
                }
            }
        };

        var init = function (_contacts, _handler) {
            contacts = _contacts;
            handler = _handler;

        };

        init(_contacts, _handler);
    };

    return self;
}(Contact || {}) );

