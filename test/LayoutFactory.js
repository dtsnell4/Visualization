"use strict";
(function (root, factory) {
    if (typeof define === "function" && define.amd) {
        define(["./DataFactory", "src/layout/AbsoluteSurface", "src/layout/Border", "src/layout/Cell", "src/layout/Grid", "src/layout/Layered", "src/layout/Popup", "src/layout/Surface", "src/layout/Tabbed", "src/common/TextBox", "src/common/Icon"], factory);
    } else {
        root.test_ChartFactory = factory(root.test_DataFactory, root.layout_AbsoluteSurface, root.layout_Border, root.layout_Cell, root.layout_Grid, root.layout_Layered, root.layout_Popup, root.layout_Surface, root.layout_Tabbed, root.common_TextBox, root.common_Icon);
    }
}(this, function (DataFactory, AbsoluteSurface, Border, Cell, Grid, Layered, Popup, Surface, Tabbed, TextBox, Icon) {
    return {
        absolutesurface: {
            simple: function () {
                return new AbsoluteSurface()
                    .widgetX(DataFactory.AbsoluteSurface.simple.widgetX)
                    .widgetY(DataFactory.AbsoluteSurface.simple.widgetY)
                    .widgetWidth(DataFactory.AbsoluteSurface.simple.widgetWidth)
                    .widgetHeight(DataFactory.AbsoluteSurface.simple.widgetHeight)
                    .widget(DataFactory.AbsoluteSurface.simple.widget.text(DataFactory.Text.simple.text))
                ;
            }
        },
        border: {
            simple: function () {
                return new Border()
                    .setContent("topSection",new TextBox().text(DataFactory.Text.simple.text))
                    .setContent("rightSection",new TextBox().text(DataFactory.Text.simple.text))
                    .setContent("bottomSection",new TextBox().text(DataFactory.Text.simple.text))
                    .setContent("leftSection",new TextBox().text(DataFactory.Text.simple.text))
                    .setContent("centerSection",new TextBox().text(DataFactory.Text.simple.text))
                ;
            }
        },
        cell: {
            simple: function () {
                return  new Cell()
                    .title(DataFactory.Surface.simple.title)
                    .widget(DataFactory.Surface.simple.widget)
                    .buttonAnnotations(DataFactory.Surface.simple.buttonAnnotations)
                ;
            }
        },
        grid: {
            simple: function () {
                return new Grid()
                    .setContent(0, 0, new TextBox().text(DataFactory.Text.simple.text))
                    .setContent(0, 1, new TextBox().text(DataFactory.Text.simple.text))
                    .setContent(1, 0, new TextBox().text(DataFactory.Text.simple.text))
                    .setContent(1, 1, new TextBox().text(DataFactory.Text.simple.text))
                    .setContent(0, 2, new TextBox().text(DataFactory.Text.simple.text), "Title AAA", 2, 2)
                    .setContent(2, 0, new TextBox().text(DataFactory.Text.simple.text), "Title BBB", 2, 4)
                ;
            }
        },
        layered: {
            simple: function () {
                var retVal = new Layered();
                
                retVal
                    .addLayer(new AbsoluteSurface().widgetX(0).widgetY(0).widgetWidth(100).widgetHeight(100).widget(new TextBox().text(DataFactory.Text.simple.text)))
                    .addLayer(new AbsoluteSurface().widgetX(40).widgetY(40).widgetWidth(50).widgetHeight(50).opacity(0.66).widget(new TextBox().text(DataFactory.Text.simple.text)))
                    .addLayer(new AbsoluteSurface().widgetX(30).widgetY(10).widgetWidth(40).widgetHeight(30).widget(new TextBox().text(DataFactory.Text.simple.text)))
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
                ;
            }
        },
        tabbed: {
            simple: function () {
                return new Tabbed()
                    .addTab(new TextBox().text(DataFactory.Text.simple.text), "Tab One", true)
                    .addTab(new TextBox().text(DataFactory.Text.simple.text), "Tab Two")
                    .addTab(new TextBox().text(DataFactory.Text.simple.text), "Tab Three")
                    .addTab(new Tabbed()
                                .labels([]).widgets([])//TODO:Figure out why this is necessary
                                .addTab(new TextBox().text(DataFactory.Text.simple.text), "Sub Tab One")
                                .addTab(new TextBox().text(DataFactory.Text.simple.text), "Sub Tab Two", true), "Nested Example")
                ;
            }
        }
    };
}));
