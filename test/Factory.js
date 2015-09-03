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
            label: "Common Widgets",
            factory: "CommonFactory",
            widgets: [{
                id: "fachar",
                label: "Font Awesome",
                samples: [
                    { id: "simple", label: "Default" }
                ]
            },{
                id: "icon",
                label: "Icon",
                samples: [
                    { id: "simple", label: "Default" }
                ]
            },{
                id: "list",
                label: "List",
                samples: [
                    { id: "simple", label: "Default" }
                ]
            },{
                id: "menu",
                label: "Menu",
                samples: [
                    { id: "simple", label: "Default" }
                ]
            },{
                id: "surface",
                label: "Surface",
                samples: [
                    { id: "simple", label: "Default" }
                ]
            },{
                id: "resizesurface",
                label: "Resize Surface",
                samples: [
                    { id: "simple", label: "Default" }
                ]
            },{
                id: "shape",
                label: "Shape",
                samples: [
                    { id: "simple", label: "Default" }
                ]
            },{
                id: "text",
                label: "Text",
                samples: [
                    { id: "simple", label: "Default" }
                ]
            },{
                id: "textbox",
                label: "Text Box",
                samples: [
                    { id: "simple", label: "Default" }
                ]
            }]
        },{
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
                label: "Polar",
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
        },{
            label: "Layout Widgets",
            factory: "LayoutFactory",
            widgets: [{
                id: "absolutesurface",
                label: "AbsoluteSurface",
                samples: [
                    { id: "simple", label: "Default" }
                ]
            },{
                id: "border",
                label: "Border",
                samples: [
                    { id: "simple", label: "Default" }
                ]
            },{
                id: "cell",
                label: "Cell",
                samples: [
                    { id: "simple", label: "Default" }
                ]
            },{
                id: "grid",
                label: "Grid",
                samples: [
                    { id: "simple", label: "Default" }
                ]
            },{
                id: "layered",
                label: "Layered",
                samples: [
                    { id: "simple", label: "Default" }
                ]
            },{
                id: "popup",
                label: "Popup",
                samples: [
                    { id: "simple", label: "Default" }
                ]
            },{
                id: "surfacelayout",
                label: "Surface",
                samples: [
                    { id: "simple", label: "Default" }
                ]
            },{
                id: "tabbed",
                label: "Tabbed",
                samples: [
                    { id: "simple", label: "Default" }
                ]
            }]
        },{
            label: "Maps",
            factory: "MapFactory",
            widgets: [{
                id: "gmap",
                label: "Google Map",
                samples: [
                    { id: "simple", label: "Default" },
                    { id: "heat", label: "Heat Map" },
                    { id: "graph", label: "Graph" }
                ]
            },{
                id: "counties",
                label: "Choropleth Counties",
                samples: [
                    { id: "simple", label: "Default" }
                ]
            },{
                id: "states",
                label: "Choropleth States",
                samples: [
                    { id: "simple", label: "Default" },
                    { id: "heatmap", label: "Heat Map" }
                ]
            },{
                id: "countries",
                label: "Choropleth Countries",
                samples: [
                    { id: "simple", label: "Default" }
                ]
            }]
        },{
            label: "Form Widgets",
            factory: "FormFactory",
            widgets: [{
                id: "form",
                label: "Form",
                samples: [
                    { id: "simple", label: "Default" }
                ]
            },{
                id: "slider",
                label: "Slider",
                samples: [
                    { id: "simple", label: "Default" }
                ]
            }]
        },{
            label: "Graph Widget",
            factory: "GraphFactory",
            widgets: [{
                id: "graph",
                label: "Graph",
                samples: [
                    { id: "simple", label: "Default" },
                    { id: "vertex", label: "Vertex" }
                ]
            }]
        },{
            label: "Marshallers",
            factory: "MarshallerFactory",
            widgets: [{
                id: "html",
                label: "HTML",
                samples: [
                    { id: "simple", label: "Default" },
                    { id: "hipie", label: "Hipie" }
                ]
            },{
                id: "graph",
                label: "Graph",
                samples: [
                    { id: "simple", label: "Default" },
                    { id: "hipie", label: "Hipie" }
                ]
            }]
        },{
            label: "Other",
            factory: "OtherFactory",
            widgets: [{
                id: "heatmap",
                label: "Heat Map",
                samples: [
                    { id: "simple", label: "Default" }
                ]
            },{
                id: "wordcloud",
                label: "Word Cloud",
                samples: [
                    { id: "simple", label: "Default" }
                ]
            },{
                id: "table",
                label: "Table",
                samples: [
                    { id: "simple", label: "Default" },
                    { id: "large", label: "Large Data" }
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
