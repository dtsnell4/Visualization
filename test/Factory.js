"use strict";
(function (root, factory) {
    if (typeof define === "function" && define.amd) {
        define(["require"], factory);
    } else {
        root.test_Factory = factory(root.require);
    }
}(this, function (require) {
    return {
        categories: [{
            label: "HPCC Charts",
            factory: "ChartFactory",
            widgets: [{
                id: "column",
                label: "Column/Bar",
                samples: [
                    { id: "simple", label: "Default" },
                    { id: "bar", label: "Bar" }
                ]
            }]
        }],
        create: function (factoryPath, widgetID, sampleID, callback) {
            require(["./" + factoryPath], function (factory) {
                callback(factory[widgetID][sampleID]());
            });
        }
    };
}));
