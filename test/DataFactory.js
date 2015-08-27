"use strict";
(function (root, factory) {
    if (typeof define === "function" && define.amd) {
        define([], factory);
    } else {
        root.test_DataFactory = factory();
    }
}(this, function () {
    return {
        OneD: {
            subjects: {
                columns: ["Result"],
                data: [66]
            }
        },
        TwoD: {
            subjects: {
                columns: ["Subject"],
                data: [
                    ["Geography", 75],
                    ["English", 45],
                    ["Math", 98],
                    ["Science", 66]
                ]
            }
        },
        ND: {
            subjects: {
                columns: ["Subject", "Year 1", "Year 2", "Year 3"],
                data: [
                    ["Geography", 75, 68, 65],
                    ["English", 45, 55, 52],
                    ["Math", 98, 92, 90],
                    ["Science", 66, 60, 66]
                ]
            }
        },
        Tree: {},
        Graph: {}
    };
}));
