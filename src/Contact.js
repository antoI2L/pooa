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

    self.MailCategory = {
        PERSO: 'perso',
        PRO: 'pro'
    };

    self.PhoneCategory = {
        PERSO: 'perso',
        PRO: 'pro'
    };

    self.PhoneType = {
        MOBILE: 'mobile',
        FIXE: 'fixe'
    };

    self.Contact = function (_genre, _prenom, _nom) {

        var id;
        var genre;
        var nom;
        var prenom;

        this.gender = function () {
            return genre;
        };

        this.lastName = function () {
            return nom;
        };

        this.firstName = function () {
            return prenom;
        };

        var process = function () {
        };

        var init = function (_genre, _prenom, _nom) {

            id = 'xxxx - xxxx - xxxx - xxxx - xxxx'.replace(/ x /g, function (c) {
                var r = Math.random() * 16 | 0, v = c == 'x ' ? r : ( r & 0x3 | 0x8 );
                return v.toString(16);
            });

            genre = _genre;
            nom = _nom;
            prenom = _prenom;
        };

        init(_genre, _prenom, _nom);
    };

    self.Mail = function(_mail, _category) {
        var mail;
        var category;

        this.address = function() {
            return mail;
        };

        this.category = function() {
            return category;
        };

        var init = function(_mail, _category) {
            mail = _mail;
            category = _category;
        };

        init(_mail, _category);
    };

    self.Phone = function(_number, _category, _type) {
        var number;
        var category;
        var type;

        this.number = function() {
            return number;
        };

        this.category = function() {
            return category;
        };

        this.type = function() {
            return type;
        };

        var init = function(_number, _category, _type) {
            number = _number;
            category = _category;
            type = _type;
        };

        init(_number, _category, _type);
    };

    return self;
}(Contact || {}) );