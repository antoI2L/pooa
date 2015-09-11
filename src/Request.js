var Contact = Contact || {};

Contact = ( function (self) {
    "use strict";


    self.Request = function(_contact) {
        var contact;

        this.contact=function(){
            return contact;
        };
        var init = function(_contact) {
            contact = _contact;
        };

        init(_contact);
    };

    return self;
}(Contact || {}) );/**
 * Created by antony on 11/09/15.
 */
