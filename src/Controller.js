/**
 * Created by antony on 18/09/15.
 */
var Contact = Contact || {};

Contact = ( function (self) {
    "use strict";

    self.Controller = function (_model, _view) {
        var model;
        var view;
        var that = this;

        this.deleteContact = function (contactId) {
            model.deleteContact(contactId);
            view.deleteRow(contactId);
        };

        var init = function (_model, _view) {
            model = _model;
            view = _view;

            $('document').ready(function () {
                $('td#cellActions').each(function () {
                    $(this).find('button').click(function (e) {
                        var contactId = $(this).attr('id').split('_')[1];
                        that.deleteContact(contactId);
                    });
                });
            });
        };

        init(_model, _view);

    };

    return self;
}(Contact || {}) );
