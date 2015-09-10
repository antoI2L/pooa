/**
 * Created by antony on 10/09/15.
 */

var Contact = Contact || {};

Contact = ( function (self) {
    "use strict";

    self.Builder = function() {

        this.createMinimalContact = function(genre, prenom, nom) {
            return new Contact.Contact(genre, prenom, nom);
        };

        this.createContactWithProfessionalMail = function(genre, prenom, nom, mail) {
            var contact = this.createMinimalContact(genre, prenom, nom);
            contact.addMail(new Contact.Mail(mail, Contact.MailCategory.PRO));

            return contact;
        };

        this.createContactWithProfessionalMobile = function(genre, prenom, nom, mobile) {
            var contact = this.createMinimalContact(genre, prenom, nom);
            contact.addPhone(new Contact.Phone(mobile, Contact.PhoneCategory.PRO, Contact.PhoneType.MOBILE));

            return contact;
        };

        var init = function() {};

        init();
    };

    return self;
}(Contact || {}) );
