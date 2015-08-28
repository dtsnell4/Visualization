"use strict";
(function (root, factory) {
    if (typeof define === "function" && define.amd) {
        define(["./DataFactory", "src/google/Column", "src/google/Bar", "src/google/Scatter", "src/google/Line", "src/google/Area", "src/google/Pie", "src/google/Timeline", "src/google/TreeMap"], factory);
    } else {
        root.test_ChartFactory = factory(root.test_DataFactory, root.google_Column, root.google_Bar, root.google_Scatter, root.google_Line, root.google_Area, root.google_Pie, root.google_Timeline, root.google_TreeMap);
    }
}(this, function (DataFactory, Column, Bar, Scatter, Line, Area, Pie, Timeline, TreeMap) {
    return {
        column: {
            simple: function () {
                return new Column()
                    .columns(DataFactory.ND.subjects.columns)
                    .data(DataFactory.ND.subjects.data)
                ;
//            },
//            bar: function () {
//                return this.simple()
//                    .orientation("vertical")
//                ;
            }
        },
        bar: {
            simple: function () {
                return new Bar()
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
        timeline: {
            simple: function () {
                return new Timeline()
                    .columns(DataFactory.Timeline.default.columns)
                    .data(DataFactory.Timeline.default.data)
                ;
            }
        },
        treemap: {
            simple: function () {
                return new TreeMap()
                    .columns(DataFactory.TreeMap.default.columns)
                    .data(DataFactory.TreeMap.default.data)
                ;
            }
        }
    };
}));
