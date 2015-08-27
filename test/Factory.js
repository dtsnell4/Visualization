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
            },{
                id: "bubble",
                label: "Bubble",
                samples: [
                    { id: "simple", label: "Default" }
//                    { id: "bar", label: "Bar" }
                ]
            },{
                id: "scatter",
                label: "Scatter",
                samples: [
                    { id: "simple", label: "Default" }
//                    { id: "bar", label: "Bar" }
                ]
            },{
                id: "line",
                label: "Line",
                samples: [
                    { id: "simple", label: "Default" }
//                    { id: "bar", label: "Bar" }
                ]
            },{
                id: "area",
                label: "Area",
                samples: [
                    { id: "simple", label: "Default" }
//                    { id: "bar", label: "Bar" }
                ]
            },{
                id: "pie",
                label: "Pie",
                samples: [
                    { id: "simple", label: "Default" }
//                    { id: "bar", label: "Bar" }
                ]
            },{
                id: "step",
                label: "Step",
                samples: [
                    { id: "simple", label: "Default" }
//                    { id: "bar", label: "Bar" }
                ]
            },{
                id: "summary",
                label: "Summary",
                samples: [
                    { id: "simple", label: "Default" }
//                    { id: "bar", label: "Bar" }
                ]
            },{
                id: "multichart",
                label: "MultiChart",
                samples: [
                    { id: "simple", label: "Default" }
//                    { id: "bar", label: "Bar" }
                ]
            }]
        }],
        create: function (factoryPath, widgetID, sampleID, callback) {
            require(["./" + factoryPath], function (factory) {
//                console.log(factory, factory[widgetID][sampleID]());
                callback(factory[widgetID][sampleID]());
            });
        }
    };
}));
