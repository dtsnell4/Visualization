"use strict";
(function (root, factory) {
    if (typeof define === "function" && define.amd) {
        define(["./DataFactory", "src/other/HeatMap", "src/other/WordCloud", "src/other/Table"], factory);
    } else {
        root.test_ChartFactory = factory(root.test_DataFactory, root.other_HeatMap, root.other_WordCloud, root.other_Table);
    }
}(this, function (DataFactory, HeatMap, WordCloud, Table) {
    return {
        heatmap: {
            simple: function () {
                return new HeatMap()
                    .columns(DataFactory.HeatMap.simple.columns)
                    .data(DataFactory.HeatMap.simple.data)
                ;
            }
        },
        wordcloud: {
            simple: function () {
                var retVal = new WordCloud()
                    .columns(DataFactory.WordCloud.simple.columns)
                ;
                var words = (DataFactory.WordCloud.simple.words)
                    .map(function (d) {
                        return [ d, 10 + Math.random() * 14 ];
                    });
                retVal.data(words);
                return retVal;
            }
        },
        table: {
            simple: function () {
                return new Table()
                    .columns(DataFactory.Table.simple.columns)
                    .data(DataFactory.Table.simple.data)
                ;
            },
            large: function () {
                return new Table()
                    .columns(DataFactory.Table.large.columns)
                    .data(DataFactory.Table.large.data)
                    .fixedHeader(true)
                ;
            }
        }
    };
}));
