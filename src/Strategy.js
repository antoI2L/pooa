/**
 * Created by antony on 10/09/15.
 */
var Contact = Contact || {};

Contact = ( function (self) {
    "use strict";

    self.FromNameSearchStrategy = function (_prenom, _nom) {
        var nom;
        var prenom;
        this.search = function (contactList) {
            var contacts = [];

            for (var row in contactList) {
                var contact = contactList[row];

                if (contact.firstName() === prenom && contact.lastName() === nom) {
                    contacts.push(contact);
                }
            }

            if (contacts.length === 0) return null;
            if (contacts.length === 1) return contacts[0];

            return contacts;
        };
        var init = function (_prenom, _nom) {
            nom = _nom;
            prenom = _prenom;
        };

        init(_prenom, _nom);

    };

    self.FromMailSearchStrategy = function (_mail) {
        var mail;
        this.search = function (contactList) {
            var contacts = [];
            for (var row in contactList) {
                var contact = contactList[row];
                var mails = contact.mails();
                for (var i = 0; i < mails.length; i++) {
                    if (mails[i].address() === mail) {
                        contacts.push(contact);
                    }
                }

            }
            if (contacts.length === 0) return null;
            if (contacts.length === 1) return contacts[0];

            return contacts;
        };
        var init = function (_email) {
            mail = _email;

        };

        init(_mail);
    };

    self.FromPhoneSearchStrategy = function (_phone) {
        var phone;
        this.search = function (contactList) {
            var contacts = [];
            for (var row in contactList) {
                var contact = contactList[row];
                var phones = contact.phones();
                for (var i = 0; i < phones.length; i++) {
                    if (phones[i].number() === phone) {
                        contacts.push(contact);
                    }
                }

            }
            if (contacts.length === 0) return null;
            if (contacts.length === 1) return contacts[0];

            return contacts;
        };
        var init = function (_phone) {
            phone = _phone;

        };

        init(_phone);

    };

    self.ChangePhoneStrategy = function(_prenom, _nom, _ancienTel, _nouveauTel) {

        var prenom;
        var nom;
        var ancienTel;
        var nouveauTel;
        var strategy;

        this.strategy = function() {
            return strategy;
        };

        var init = function (_prenom, _nom, _ancienTel, _nouveauTel) {
            prenom = _prenom;
            nom = _nom;
            ancienTel = _ancienTel;
            nouveauTel = _nouveauTel;
            strategy = new Contact.FromPhoneSearchStrategy(ancienTel);
        };

        init(_prenom, _nom, _ancienTel, _nouveauTel);
    };

    return self;
}(Contact || {}) );
