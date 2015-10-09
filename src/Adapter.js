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

        this.load = function (_contacts) {
            for (var j = 0; j < localStorage.length; j++) {
                var obj = JSON.parse(localStorage.getItem(localStorage.key(j)));
                var contact = new Contact.Contact(obj.genre, obj.firstName, obj.lastName);
                contact.setId(obj.id);
                contact.setTag(obj.tag);

                var i;
                for (i = 0; i < obj.phones.length; i++) {
                    var phone = obj.phones[i].split('[');
                    contact.addPhone(new Contact.Phone(phone[0], phone[1].substring(0, phone[1].length - 1), phone[2].substring(0, phone[2].length - 1)));
                }
                for (i = 0; i < obj.mails.length; i++) {
                    var mail = obj.mails[i].split('[');
                    contact.addMail(new Contact.Mail(mail[0], mail[1].substring(0, mail[1].length - 1)));
                }

                _contacts.add(contact);
            }
        };

        this.save = function (_contacts) {
            localStorage.clear();
            var iterator = new Contact.ContactIterator(_contacts.list);

            while (iterator.hasNext()) {
                var contact = iterator.current();

                var phones = [];
                var mails = [];

                var phonesList = contact.phones();
                for (var i = 0; i < phonesList.length; i++) {
                    phones.push(phonesList[i].toString());
                }

                var mailList = contact.mails();
                for (var i = 0; i < mailList.length; i++) {
                    mails.push(mailList[i].toString());
                }

                localStorage.setItem('contacts/' + contact.id(), JSON.stringify({
                    'id': contact.id(),
                    'genre': contact.gender(),
                    'lastName': contact.lastName(),
                    'firstName': contact.firstName(),
                    'mails': mails,
                    'phones': phones,
                    'tag': contact.tag()
                }));
                iterator.next();
            }
        };
    };

    self.Storage = {
        instance: function () {
            if (instance === null) {
                instance = new Singleton();
            }

            return instance;
        }
    };

    return self;
}(Contact || {}) );