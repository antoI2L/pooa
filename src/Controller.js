/**
 * Created by antony on 18/09/15.
 */
/**
 * Created by antony on 18/09/15.
 */
var Contact = Contact || {};

Contact = ( function (self) {
    "use strict";

    self.Controller = function (_model,_view) {
        var model;
        var view;

        this.writeContacts = function(){

        }

        var init = function (_model,_view) {
            model = _model;
            view=_view;

        };

        init(_model,_view);

    };

    return self;
}(Contact || {}) );
