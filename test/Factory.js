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
            },{
                id: "multichartsurface",
                label: "MultiChart Surface",
                samples: [
                    { id: "simple", label: "Default" }
//                    { id: "bar", label: "Bar" }
                ]
            }]
        },{
            label: "AM Charts",
            factory: "AmChartFactory",
            widgets: [{
                id: "bar",
                label: "Column/Bar",
                samples: [
                    { id: "simple", label: "Default" },
                    { id: "bar", label: "Bar" }
                ]
            },{
                id: "scatter",
                label: "Scatter",
                samples: [
                    { id: "simple", label: "Default" }
                ]
            },{
                id: "line",
                label: "Line",
                samples: [
                    { id: "simple", label: "Default" }
                ]
            },{
                id: "area",
                label: "Area",
                samples: [
                    { id: "simple", label: "Default" }
                ]
            },{
                id: "pie",
                label: "Pie",
                samples: [
                    { id: "simple", label: "Default" }
                ]
            },{
                id: "gauge",
                label: "Gauge",
                samples: [
                    { id: "simple", label: "Default" }
                ]
            },{
                id: "polar",
                label: "polar",
                samples: [
                    { id: "simple", label: "Default" }
                ]
            },{
                id: "floatingcolumn",
                label: "Floating Column",
                samples: [
                    { id: "simple", label: "Default" }
                ]
            },{
                id: "pyramid",
                label: "Pyramid",
                samples: [
                    { id: "simple", label: "Default" }
                ]
            },{
                id: "funnel",
                label: "Funnel",
                samples: [
                    { id: "simple", label: "Default" }
                ]
            },{
                id: "candle",
                label: "Candle",
                samples: [
                    { id: "simple", label: "Default" }
                ]
            }]
        },{
            label: "Google Charts",
            factory: "GoogleFactory",
            widgets: [{
                id: "column",
                label: "Column",
                samples: [
                    { id: "simple", label: "Default" }
                ]
            },{
                id: "bar",
                label: "Bar",
                samples: [
                    { id: "simple", label: "Default" }
                ]
            },{
                id: "scatter",
                label: "Scatter",
                samples: [
                    { id: "simple", label: "Default" }
                ]
            },{
                id: "line",
                label: "Line",
                samples: [
                    { id: "simple", label: "Default" }
                ]
            },{
                id: "area",
                label: "Area",
                samples: [
                    { id: "simple", label: "Default" }
                ]
            },{
                id: "pie",
                label: "Pie",
                samples: [
                    { id: "simple", label: "Default" }
                ]
            },{
                id: "timeline",
                label: "Timeline",
                samples: [
                    { id: "simple", label: "Default" }
                ]
            },{
                id: "treemap",
                label: "TreeMap",
                samples: [
                    { id: "simple", label: "Default" }
//                    { id: "bar", label: "Bar" }
                ]
            }]
        },{
            label: "C3 Charts",
            factory: "C3ChartFactory",
            widgets: [{
                id: "area",
                label: "Area",
                samples: [
                    { id: "simple", label: "Default" }
                ]
            },{
                id: "column",
                label: "Column",
                samples: [
                    { id: "simple", label: "Default" }
                ]
            },{
                id: "donut",
                label: "Donut",
                samples: [
                    { id: "simple", label: "Default" }
                ]
            },{
                id: "gauge",
                label: "Gauge",
                samples: [
                    { id: "simple", label: "Default" }
                ]
            },{
                id: "line",
                label: "Line",
                samples: [
                    { id: "simple", label: "Default" }
                ]
            },{
                id: "pie",
                label: "Pie",
                samples: [
                    { id: "simple", label: "Default" }
                ]
            },{
                id: "scatter",
                label: "Scatter",
                samples: [
                    { id: "simple", label: "Default" }
                ]
            },{
                id: "step",
                label: "Step",
                samples: [
                    { id: "simple", label: "Default" }
//                    { id: "bar", label: "Bar" }
                ]
            }]
        },{
            label: "Tree Charts",
            factory: "TreeFactory",
            widgets: [{
                id: "circlepacking",
                label: "Circle Packing",
                samples: [
                    { id: "simple", label: "Default" }
                ]
            },{
                id: "dendrogram",
                label: "Dendrogram",
                samples: [
                    { id: "simple", label: "Default" }
                ]
            },{
                id: "sunburstpartition",
                label: "sunburst Partition",
                samples: [
                    { id: "simple", label: "Default" }
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
