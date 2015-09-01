"use strict";
(function (root, factory) {
    if (typeof define === "function" && define.amd) {
        define(["./DataFactory", "src/marshaller/HTML", "src/marshaller/Graph"], factory);
    } else {
        root.test_ChartFactory = factory(root.test_DataFactory, root.marshaller_HTML, root.marshaller_Graph);
    }
}(this, function (DataFactory, HTML, Graph) {
    return {
        html: {
            simple: function () {
                return new HTML()
                    .ddlUrl(DataFactory.Marshaller.simple.ddlUrl)
                    .databomb(DataFactory.Marshaller.simple.databomb)
                ;
            },
            hipie: function () {
                return new HTML()
                    .ddlUrl(DataFactory.Marshaller.hipie.ddlUrl)
                ;
            }
        },
        graph: {
            simple: function () {
                return new Graph()
                    .ddlUrl(DataFactory.Marshaller.simple.ddlUrl)
                    .databomb(DataFactory.Marshaller.simple.databomb)
                ;
            },
            hipie: function () {
                return new HTML()
                    .ddlUrl(DataFactory.Marshaller.hipie.ddlUrl)
                ;
            }
        }
    };
}));
