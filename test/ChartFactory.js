"use strict";
(function (root, factory) {
    if (typeof define === "function" && define.amd) {
        define(["./DataFactory", "src/chart/Column"], factory);
    } else {
        root.test_ChartFactory = factory(root.test_DataFactory, root.chart_Column);
    }
}(this, function (DataFactory, Column) {
    return {
        column: {
            simple: function () {
                return new Column()
                    .columns(DataFactory.ND.subjects.columns)
                    .data(DataFactory.ND.subjects.data)
                ;
            },
            bar: function () {
                return this.simple()
                    .orientation("vertical")
                ;
            }
        }
    };
}));
