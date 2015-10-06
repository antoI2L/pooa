/**
 * Created by antony on 18/09/15.
 */
var Contact = Contact || {};

Contact = ( function (self) {
    "use strict";

    self.View = function (_model) {
        var model;
        var that = this;

        this.writeContact = function () {
            var contacts = model.getContactsInLocalStorage();

            var html = "<table>";
            html += "<tr><th id='cellFirstName'>First name</th><th id='cellLastName'>Last name</th><th id='cellPhones'>Phones</th><th id='cellMails'>Mails</th><th id='cellTags'>Tags</th><th id='cellActions'>Actions</th></tr>";

            for (var i = 0; i < contacts.length; i++) {
                var contact = JSON.parse(contacts[i]);
                html += "<tr id='x" + contact.id + "'><td id='cellFirstName'>" + contact.firstName + "</td><td id='cellLastName'>" + contact.lastName + "</td><td id='cellPhones'>";
                html += "" + contact.phones.toString().replace(',', '/');
                html += "</td><td id='cellMails'>";
                html += "" + contact.mails.toString().replace(',', '/');
                html += "</td><td id='cellTags'>" + contact.tag + "</td><td id='cellActions'><button id='button_" + contact.id + "'>X</button></td></tr>";
            }

            $('#contacts').append(html + '</table>');

        };

        this.deleteRow = function (contactId) {
            $('tr#x' + contactId).remove();
        };


        var init = function (_model) {
            model = _model;
            that.writeContact();
        };


        init(_model);
    };

    return self;
}(Contact || {}) );

