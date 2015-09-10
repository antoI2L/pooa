/**
 * Created by antony on 10/09/15.
 */

var Contact = Contact || {};

Contact = ( function (self) {
    "use strict";

    self.PhoneCategory = {
        PERSO: 'perso',
        PRO: 'pro'
    };

    self.PhoneType = {
        MOBILE: 'mobile',
        FIXE: 'fixe'
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
