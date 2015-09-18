/**
 * Created by antony on 10/09/15.
 */

var Contact = Contact || {};

Contact = ( function (self) {
    "use strict";

    self.Gender = {
        MR: 'mr',
        MME: 'mme'
    };

    self.Contact = function (_genre, _prenom, _nom) {
        var id;
        var genre;
        var nom;
        var prenom;
        var tag;
        var mailList = [];
        var phoneList = [];

        this.id = function () {
            return id;
        };

        this.gender = function () {
            return genre;
        };

        this.lastName = function () {
            return nom;
        };

        this.firstName = function () {
            return prenom;
        };

        this.mails = function () {
            return mailList;
        };

        this.phones = function () {
            return phoneList;
        };

        this.addMail = function (mail) {
            mailList.push(mail);
        };

        this.addPhone = function (phone) {
            phoneList.push(phone);
        };

        this.setTag = function (_tag) {
            tag = _tag;
        };

        this.addTag = function (_tag) {
            tag = _tag;
        };

        this.tag = function () {
            return tag;
        };

        var init = function (_genre, _prenom, _nom) {

            id = 'xxxx-xxxx-xxxx-xxxx-xxxx'.replace(/x/g, function (c) {
                var r = Math.random() * 16 | 0, v = c == 'x' ? r : ( r & 0x3 | 0x8 );
                return v.toString(16);
            });

            genre = _genre;
            nom = _nom;
            prenom = _prenom;
        };

        init(_genre, _prenom, _nom);
    };

    return self;
}(Contact || {}) );