/**
 * Created by antony on 09/10/15.
 */
var Contact = Contact || {};

Contact = ( function (self) {
    "use strict";

    self.Entity = function (_specificInfo, _factInfo) {
        var specificInfo;
        var factInfo;

        this.getSpecificInfo = function () {
            return specificInfo;
        };

        this.getFactInfo = function () {
            return factInfo;
        };

        var init = function (_specificInfo, _factInfo) {
            specificInfo = _specificInfo;
            factInfo = _factInfo;
        };

        init(_specificInfo, _factInfo);
    };

    self.EntityStorage = function () {
        var entities;
        var entitiesLength;

        this.addEntity = function (information, entity) {
            entities[information] = entity;
            entitiesLength += 1;

            return entity;
        };

        this.getEntities = function () {
            return entities;
        };

        this.countEntities = function () {
            return entitiesLength;
        };

        var init = function () {
            entities = {};
            entitiesLength = 0;
        };

        init();
    };

    self.EntityManager = function () {
        var storage;

        this.exists = function (information, instance) {
            var entities = storage.getEntities();

            return (entities[information] === instance)
        };

        this.get = function (information, instance) {
            if (this.exists(information, instance)) {
                var entities = storage.getEntities();
                return entities[information];
            }

            return storage.addEntity(information, instance);
        };

        var init = function () {
            storage = new Contact.EntityStorage();
        };

        init();
    };

    self.Factory = function () {
        var manager;
        var flyweights = {};

        this.make = function (name, address) {
            return manager.get(name, address);
        };

        var init = function () {
            manager = new Contact.EntityManager();
        };

        init();
    };

    return self;
}(Contact || {}) );