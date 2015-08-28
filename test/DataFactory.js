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
            },
            amgauge: {
                numBands: [3],
                bandsColor: ["#84b761","#fdd400","#cc4748"],
                bandsEndValue: [90,130,220],
                bandsStartValue: [0,90,130],
                bandsInnerRadius: [null, null, "95%"],
                bottomText: ["[[data]] km/h"],
                high: [220],
                low: [0],
                data: [100],
                axisLineWidth: [1],
                axisAlpha: [0.2],
                tickAlpha: [0.2],
                valueInterval: [20]
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
                    ["Science", 66, 60, 72]
                ]
            },
            ampolar: {
                columns: ["Subject", "Year 1", "Year 2", "Year 3", "Year 4"],
                data: [
                    ["English", 5, 43, 41, 92],
                    ["English II", 17, 43, 83, 93],
                    ["English III", 6, 43, 64, 93],
                    ["Geography", 7, 45, 52, 83],
                    ["Geography II", 16, 73, 52, 83],
                    ["Geography III", 26, 83, 11, 72],
                    ["Science", 66, 60, 85, 6],
                    ["Science II", 46, 20, 53, 7],
                    ["Science III", 46, 20, 38, 7],
                    ["Math", 98, 30, 23, 13],
                    ["Math II", 76, 30, 34, 6],
                    ["Math III", 80, 30, 27, 8]
                ]
            },
            fivecolumn: { //amchart candle
                columns: ["Subject", "low", "open", "close", "high"],
                data: [
                    ["English", 5, 43, 61, 92],
                    ["English II", 7, 23, 83, 93],
                    ["English III", 6, 33, 64, 93],
                    ["Geography", 7, 45, 52, 83],
                    ["Geography II", 6, 73, 52, 83],
                    ["Geography III", 6, 23, 71, 82],
                    ["Science", 6, 60, 85, 96],
                    ["Science II", 16, 20, 53, 77],
                    ["Science III", 46, 20, 38, 7],
                    ["Math", 8, 30, 43, 63],
                    ["Math II", 26, 30, 64, 76],
                    ["Math III", 0, 30, 77, 88]
                ]
            }
        },
        Tree: {
            default: {
                data: 
                    {label: "root", children: [{
                        label: "A",
                        children: [{
                            label: "AA",
                            children: [{
                                label: "AAA"
                            }]
                        }, {
                            label: "AB",
                            children: [{
                                label: "ABA"
                            }]
                        }]
                    }, {
                        label: "B",
                        children: [{
                            label: "BA",
                            children: [{
                                label: "BAA"
                            }]
                        }, {
                            label: "BB"
                        }]
                    }]
                }
            }
        },
        Graph: {},
        Timeline: {
            default: {
                columns: ["Row Label", "Bar Label", "Start", "End"],
                data: [
                    ["Analysis", "", "2015-03-29", "2015-04-03"],
                    ["Design", "", "2015-04-03", "2015-05-13"],
                    ["Development", "", "2015-05-05", "2015-08-11"],
                    ["Testing", "", "2015-07-25", "2015-08-30"],
                    ["Release", "", "2015-08-30", "2015-09-03"]
                ]
            }
        },
        TreeMap: {
            default: {
                columns: [["Location", "Parent", "Market trade volume (size)", "Market increase/decrease (color)"]],
                data: [
                  ["Global",    "",                 0,                               0],
                  ["America",   "Global",             0,                               0],
                  ["Europe",    "Global",             0,                               0],
                  ["Asia",      "Global",             0,                               0],
                  ["Australia", "Global",             0,                               0],
                  ["Africa",    "Global",             0,                               0],
                  ["Brazil",    "America",            11,                              10],
                  ["USA",       "America",            52,                              31],
                  ["Mexico",    "America",            24,                              12],
                  ["Canada",    "America",            16,                              -23],
                  ["France",    "Europe",             42,                              -11],
                  ["Germany",   "Europe",             31,                              -2],
                  ["Sweden",    "Europe",             22,                              -13],
                  ["Italy",     "Europe",             17,                              4],
                  ["UK",        "Europe",             21,                              -5],
                  ["China",     "Asia",               36,                              4],
                  ["Japan",     "Asia",               20,                              -12],
                  ["India",     "Asia",               40,                              63],
                  ["Laos",      "Asia",               4,                               34],
                  ["Mongolia",  "Asia",               1,                               -5],
                  ["Israel",    "Asia",               12,                              24],
                  ["Iran",      "Asia",               18,                              13],
                  ["Pakistan",  "Asia",               11,                              -52],
                  ["Egypt",     "Africa",             21,                              0],
                  ["S. Africa", "Africa",             30,                              43],
                  ["Sudan",     "Africa",             12,                              2],
                  ["Congo",     "Africa",             10,                              12],
                  ["Zaire",     "Africa",             8,                               10]
                ]
            }
        }
    };
}));
