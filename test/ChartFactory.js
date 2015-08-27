"use strict";
(function (root, factory) {
    if (typeof define === "function" && define.amd) {
        define(["./DataFactory", "src/chart/Column", "src/chart/Bubble", "src/chart/Scatter", "src/chart/Line", "src/chart/Area", "src/chart/Pie", "src/chart/Step", "src/chart/Summary", "src/chart/MultiChart"], factory);
    } else {
        root.test_ChartFactory = factory(root.test_DataFactory, root.chart_Column, root.chart_Bubble, root.chart_Scatter, root.chart_Line, root.chart_Area, root.chart_Pie, root.chart_Step, root.chart_Summary, root.chart_MultiChart);
    }
}(this, function (DataFactory, Column, Bubble, Scatter, Line, Area, Pie, Step, Summary, MultiChart) {
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
        },
        bubble: {
            simple: function () {
                return new Bubble()
                    .columns(DataFactory.ND.subjects.columns)
                    .data(DataFactory.ND.subjects.data)
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
                    .columns(DataFactory.ND.subjects.columns)
                    .data(DataFactory.ND.subjects.data)
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
        summary: {
            simple: function () {
                return new Summary()
                    .columns(DataFactory.OneD.subjects.columns)
                    .data(DataFactory.OneD.subjects.data)
                ;
            }
        },
        multichart: {
            simple: function () {
                return new MultiChart()
                    .columns(DataFactory.OneD.subjects.columns)
                    .data(DataFactory.OneD.subjects.data)
                ;
            }
        }
    };
}));
