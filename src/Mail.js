/**
 * Created by antony on 10/09/15.
 */

var Contact = Contact || {};

Contact = ( function (self) {
    "use strict";

    self.MailCategory = {
        PERSO: 'PERSO',
        PRO: 'PRO'
    };

    self.Mail = function (_mail, _category) {
        var mail;
        var category;

        this.address = function () {
            return mail;
        };

        this.category = function () {
            return category;
        };

        var init = function (_mail, _category) {
            mail = _mail;
            category = _category;
        };

        this.toString = function () {
            return mail + "[" + category + "]";
        };

        init(_mail, _category);
    };

    return self;
}(Contact || {}) );
