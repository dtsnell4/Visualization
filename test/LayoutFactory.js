"use strict";
(function (root, factory) {
    if (typeof define === "function" && define.amd) {
        define(["./DataFactory", "src/layout/AbsoluteSurface", "src/layout/Border", "src/layout/Cell", "src/layout/Grid", "src/layout/Layered", "src/layout/Popup", "src/layout/Surface", "src/layout/Tabbed", "src/common/Icon", "src/chart/Pie", "src/chart/MultiChartSurface", "src/chart/Line", "src/chart/Column", "src/chart/Step"], factory);
    } else {
        root.test_ChartFactory = factory(root.test_DataFactory, root.layout_AbsoluteSurface, root.layout_Border, root.layout_Cell, root.layout_Grid, root.layout_Layered, root.layout_Popup, root.layout_Surface, root.layout_Tabbed, root.common_Icon, root.chart_Pie, root.chart_Line, root.chart_MultiChartSurface, root.chart_Column, root.chart_Step);
    }
}(this, function (DataFactory, AbsoluteSurface, Border, Cell, Grid, Layered, Popup, Surface, Tabbed, Icon, Pie, MultiChartSurface, Line, Column, Step) {
    return {
        absolutesurface: {
            simple: function () {
                return new AbsoluteSurface()
                    .widgetX(DataFactory.AbsoluteSurface.simple.widgetX)
                    .widgetY(DataFactory.AbsoluteSurface.simple.widgetY)
                    .widgetWidth(DataFactory.AbsoluteSurface.simple.widgetWidth)
                    .widgetHeight(DataFactory.AbsoluteSurface.simple.widgetHeight)
                    .widget(DataFactory.AbsoluteSurface.simple.widget
                        .columns(DataFactory.ND.subjects.columns)
                        .data(DataFactory.ND.subjects.data)
                    )
                ;
            }
        },
        border: {
            simple: function () {
                return new Border()
                    .setContent("topSection", new Pie()
                        .columns(DataFactory.ND.subjects.columns)
                        .data(DataFactory.ND.subjects.data)
                    )
                    .setContent("rightSection", new Line()
                        .columns(DataFactory.ND.subjects.columns)
                        .data(DataFactory.ND.subjects.data)
                    )
                    .setContent("bottomSection", new Column()
                        .columns(DataFactory.ND.subjects.columns)
                        .data(DataFactory.ND.subjects.data)
                    )
                    .setContent("leftSection", new Step()
                        .columns(DataFactory.ND.subjects.columns)
                        .data(DataFactory.ND.subjects.data)
                    )
                    .setContent("centerSection", new MultiChartSurface()
                        .columns(DataFactory.ND.subjects.columns)
                        .data(DataFactory.ND.subjects.data)
                    )
                ;
            }
        },
        cell: {
            simple: function () {
                return  new Cell()
                    .title(DataFactory.Surface.simple.title)
                    .widget(DataFactory.Surface.simple.widget
                        .columns(DataFactory.ND.subjects.columns)
                        .data(DataFactory.ND.subjects.data))
                    .buttonAnnotations(DataFactory.Surface.simple.buttonAnnotations)
                ;
            }
        },
        grid: {
            simple: function () {
                return new Grid()
                    
                    .setContent(0, 0, new Pie()
                        .columns(DataFactory.TwoD.subjects.columns)
                        .data(DataFactory.TwoD.subjects.data)
                    )
                    .setContent(0, 1, new Pie()
                        .columns(DataFactory.TwoD.subjects.columns)
                        .data(DataFactory.TwoD.subjects.data)
                    )
                    .setContent(1, 0, new Pie()
                        .columns(DataFactory.TwoD.subjects.columns)
                        .data(DataFactory.TwoD.subjects.data)
                    )
                    .setContent(1, 1, new Pie()
                        .columns(DataFactory.TwoD.subjects.columns)
                        .data(DataFactory.TwoD.subjects.data)
                    )
                    .setContent(0, 2, new Line()
                        .columns(DataFactory.ND.subjects.columns)
                        .data(DataFactory.ND.subjects.data)
                        , "Title AAA", 2, 2
                    )
                    .setContent(2, 0, new MultiChartSurface()
                        .columns(DataFactory.ND.subjects.columns)
                        .data(DataFactory.ND.subjects.data)
                        , "Title BBB", 2, 4
                    )
                ;
            }
        },
        layered: {
            simple: function () {
                var retVal = new Layered();
                
                retVal
                    .addLayer(new AbsoluteSurface().widgetX(0).widgetY(0).widgetWidth(100).widgetHeight(100).widget(new Pie()
                        .columns(DataFactory.TwoD.subjects.columns)
                        .data(DataFactory.TwoD.subjects.data)
                    )
                )
                    .addLayer(new AbsoluteSurface().widgetX(40).widgetY(40).widgetWidth(50).widgetHeight(50).opacity(0.66).widget(new Line()
                        .columns(DataFactory.ND.subjects.columns)
                        .data(DataFactory.ND.subjects.data)
                    )
                )
                    .addLayer(new AbsoluteSurface().widgetX(30).widgetY(10).widgetWidth(40).widgetHeight(30).widget(new Column()
                        .columns(DataFactory.ND.subjects.columns)
                        .data(DataFactory.ND.subjects.data)
                    )
                )
                ;
                var context = retVal;
                setInterval(function () {
                    context.widgets().sort(function (l, r) {
                        if (Math.random() < 0.5) {
                            return -1;
                        }
                        return 1;
                    });
                    context.render();
                }, 3000);
                return retVal;
            }
        },
        popup: {
            simple: function () {
                var retVal =  new Popup();
                retVal.showTestButton(true);
                retVal.position("absolute");
                retVal.top(30);

                var context = retVal;
                retVal._testButton = new Icon()
                    .on("click", function () {
                        context.updateState(!(context.popupState()));
                    }, true)
                ; 

                retVal.widget(new Surface().widget(new Icon()._faChar.char(DataFactory.FAChar.simple.char)));

                return retVal;
            }
        },
        surfacelayout: {
            simple: function () {
                return new Surface()
                    .title(DataFactory.Surface.simple.title)
                    .widget(DataFactory.Surface.simple.widget)
                    .buttonAnnotations(DataFactory.Surface.simple.buttonAnnotations)
                    .widget(new Line()
                        .columns(DataFactory.ND.subjects.columns)
                        .data(DataFactory.ND.subjects.data)
                    )
                ;
            }
        },
        tabbed: {
            simple: function () {
                return new Tabbed()
                    .addTab(
                        new Pie()
                            .columns(DataFactory.TwoD.subjects.columns)
                            .data(DataFactory.TwoD.subjects.data)
                        , "Pie Chart", true)
                    .addTab(
                        new Line()
                            .columns(DataFactory.ND.subjects.columns)
                            .data(DataFactory.TwoD.subjects.data)
                        , "Line CHart")
                    .addTab(
                        new Column()
                            .columns(DataFactory.ND.subjects.columns)
                            .data(DataFactory.ND.subjects.data)
                        , "Column Chart"
                    )
                    .addTab(new Tabbed()
                        .addTab(
                            new Step()
                                .columns(DataFactory.ND.subjects.columns)
                                .data(DataFactory.ND.subjects.data)
                            , "Step Chart"
                        )
                        .addTab(
                            new Pie()
                                .columns(DataFactory.TwoD.subjects.columns)
                                .data(DataFactory.TwoD.subjects.data)
                            , "Pie Chart", true), "Nested Example"
                        )
                ;
            }
        }
    };
}));
