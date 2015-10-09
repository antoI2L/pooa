/**
 * Created by antony on 09/10/15.
 */

var Contact = Contact || {};

Contact = ( function (self) {
    "use strict";

    self.Tree = function () {
        var rightTree;
        var leftTree;
        var key;
        var contact;

        this.addContact = function (_contact) {

            var phones = _contact.phones();
            for (var i in phones) {
                this.addNode(_contact, phones[i].number())
            }
        };

        this.addNode = function (_contact, _key) {
            if (key == null && contact == null) {
                this.setContact(_contact);
                this.setKey(_key);
            } else if (_key < key) {
                if (rightTree == null) rightTree = new Contact.Tree();
                rightTree.addNode(_contact, _key);
            }
            else if (_key > key) {
                if (leftTree == null) leftTree = new Contact.Tree();
                leftTree.addNode(_contact, _key);
            }

        };

        this.search = function (strategy) {
            return strategy.searchTree(this);
        };

        this.getRightTree = function () {
            return rightTree;
        };

        this.getLeftTree = function () {
            return leftTree;
        };

        this.setKey = function (_key) {
            key = _key;
        };

        this.setContact = function (_contact) {
            contact = _contact;
        };

        this.getKey = function () {
            return key;
        };

        this.getContact = function () {
            return contact;
        };


        var init = function () {
            rightTree = null;
            leftTree = null;
            key = null;
            contact = null;
        };

        init();
    };

    return self;
}(Contact || {}) );