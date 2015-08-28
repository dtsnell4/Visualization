"use strict";
(function (root, factory) {
    if (typeof define === "function" && define.amd) {
        define(["./DataFactory", "src/amchart/Bar", "src/amchart/Bubble", "src/amchart/Scatter", "src/amchart/Line", "src/amchart/Area", "src/amchart/Pie", "src/amchart/Gauge", "src/amchart/Pyramid", "src/amchart/Candle", "src/amchart/FloatingColumn", "src/amchart/Polar", "src/amchart/Funnel"], factory);
    } else {
        root.test_ChartFactory = factory(root.test_DataFactory, root.amchart_Bar, root.amchart_Bubble, root.amchart_Scatter, root.amchart_Line, root.amchart_Area, root.amchart_Pie, root.amchart_Gauge, root.amchart_Pyramid, root.amchart_Candle, root.amchart_FloatingColumn, root.amchart_Polar, root.amchart_Funnel);
    }
}(this, function (DataFactory, Bar, Bubble, Scatter, Line, Area, Pie, Gauge, Pyramid, Candle, FloatingColumn, Polar, Funnel) {
    return {
        bar: {
            simple: function () {
                return new Bar()
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
        gauge: {
            simple: function () {
                return new Gauge()
                    .numBands(DataFactory.OneD.amgauge.numBands)
                    .bandsColor(DataFactory.OneD.amgauge.bandsColor)
                    .bandsEndValue(DataFactory.OneD.amgauge.bandsEndValue)
                    .bandsStartValue(DataFactory.OneD.amgauge.bandsStartValue)
                    .bandsInnerRadius(DataFactory.OneD.amgauge.bandsInnerRadius)
                    .bottomText(DataFactory.OneD.amgauge.bottomText)
                    .high(DataFactory.OneD.amgauge.high)
                    .low(DataFactory.OneD.amgauge.low)
                    .data(DataFactory.OneD.amgauge.data)
                    .axisLineWidth(DataFactory.OneD.amgauge.axisLineWidth)
                    .axisAlpha(DataFactory.OneD.amgauge.axisAlpha)
                    .tickAlpha(DataFactory.OneD.amgauge.tickAlpha)
                    .valueInterval(DataFactory.OneD.amgauge.valueInterval)
                ;
            }
        },
        pyramid: {
            simple: function () {
                return new Pyramid()
                    .columns(DataFactory.ND.subjects.columns)
                    .data(DataFactory.ND.subjects.data)
                ;
            }
        },
        candle: {
            simple: function () {
                return new Candle()
                    .columns(DataFactory.ND.fivecolumn.columns)
                    .data(DataFactory.ND.fivecolumn.data)
                ;
            }
        },
        floatingcolumn: {
            simple: function () {
                return new FloatingColumn()
                    .columns(DataFactory.ND.subjects.columns)
                    .data(DataFactory.ND.subjects.data)
                ;
            }
        },
        polar: {
            simple: function () {
                return new Polar()
                    .columns(DataFactory.ND.ampolar.columns)
                    .data(DataFactory.ND.ampolar.data)
                ;
            }
        },
        funnel: {
            simple: function () {
                return new Funnel()
                    .columns(DataFactory.ND.subjects.columns)
                    .data(DataFactory.ND.subjects.data)
                ;
            }
        }
    };
}));
