"use strict";
(function (root, factory) {
    if (typeof define === "function" && define.amd) {
        define(["./DataFactory", "src/tree/CirclePacking", "src/tree/Dendrogram", "src/tree/SunburstPartition"], factory);
    } else {
        root.test_ChartFactory = factory(root.test_DataFactory, root.tree_CirclPacking, root.tree_Dendrogram, root.tree_SunburstPartition);
    }
}(this, function (DataFactory, CirclePacking, Dendrogram, SunburstPartition) {
    return {
        circlepacking: {
            simple: function () {
                return new CirclePacking()
//                    .columns(DataFactory.Tree.subjects.columns)
                    .data(DataFactory.Tree.default.data)
                    
                ;
            }
        },
        dendrogram: {
            simple: function () {
                return new Dendrogram()
//                    .columns(DataFactory.Tree.subjects.columns)
                    .data(DataFactory.Tree.default.data)
                ;
            }
        },
        sunburstpartition: {
            simple: function () {
                return new SunburstPartition()
//                    .columns(DataFactory.Tree.subjects.columns)
                    .data(DataFactory.Tree.default.data)
                ;
            }
        }
    };
}));
