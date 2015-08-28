"use strict";
(function (root, factory) {
    if (typeof define === "function" && define.amd) {
        define(["./DataFactory", "src/c3chart/Column", "src/c3chart/Donut", "src/c3chart/Scatter", "src/c3chart/Line", "src/c3chart/Area", "src/c3chart/Pie", "src/c3chart/Step", "src/c3chart/Gauge"], factory);
    } else {
        root.test_ChartFactory = factory(root.test_DataFactory, root.c3chart_Column, root.c3chart_Donut, root.c3chart_Scatter, root.c3chart_Line, root.c3chart_Area, root.c3chart_Pie, root.c3chart_Step, root.c3chart_Gauge);
    }
}(this, function (DataFactory, Column, Donut, Scatter, Line, Area, Pie, Step, Gauge) {
    return {
        column: {
            simple: function () {
                return new Column()
                    .columns(DataFactory.ND.subjects.columns)
                    .data(DataFactory.ND.subjects.data)
                ;
            }
        },
        donut: {
            simple: function () {
                return new Donut()
                    .columns(DataFactory.TwoD.subjects.columns)
                    .data(DataFactory.TwoD.subjects.data)
                ;
            }
        },
        scatter: {
            simple: function () {
                return new Scatter()
                    .columns(DataFactory.ND.subjects.columns)
                    .data(DataFactory.ND.subjects.data)
                ;
            }
        },
        line: {
            simple: function () {
                return new Line()
                    .columns(DataFactory.ND.subjects.columns)
                    .data(DataFactory.ND.subjects.data)
                ;
            }
        },
        area: {
            simple: function () {
                return new Area()
                    .columns(DataFactory.ND.subjects.columns)
                    .data(DataFactory.ND.subjects.data)
                ;
            }
        },
        pie: {
            simple: function () {
                return new Pie()
                    .columns(DataFactory.TwoD.subjects.columns)
                    .data(DataFactory.TwoD.subjects.data)
                ;
            }
        },
        step: {
            simple: function () {
                return new Step()
                    .columns(DataFactory.ND.subjects.columns)
                    .data(DataFactory.ND.subjects.data)
                ;
            }
        },
        gauge: {
            Gauge: function () {
                return new Gauge()
                    .columns(DataFactory.OneD.subjects.columns)
                    .data(DataFactory.OneD.subjects.data)
                ;
            }
        }
    };
}));
