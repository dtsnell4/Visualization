"use strict";
(function (root, factory) {
    if (typeof define === "function" && define.amd) {
        define(["./DataFactory", "src/common/FAChar", "src/common/Icon", "src/common/Menu", "src/common/List", "src/common/Shape", "src/common/Surface", "src/common/Text", "src/common/TextBox", "src/common/ResizeSurface"], factory);
    } else {
        root.test_ChartFactory = factory(root.test_DataFactory, root.common_FAChar, root.common_Icon, root.common_Menu, root.common_List, root.common_Shape, root.common_Surface, root.common_Text, root.common_TextBox, root.common_ResizeSurface);
    }
}(this, function (DataFactory, FAChar, Icon, Menu, List, Shape, Surface, Text, TextBox, ResizeSurface) {
    return {
        fachar: {
            simple: function () {
               return new FAChar()
                    .char(DataFactory.FAChar.simple.char)
                ;
            }
        },
        icon: {
            simple: function () {
                return new Icon()
                    ._faChar.char(DataFactory.FAChar.simple.char)
                ;
            }
        },
        list: {
            simple: function () {
                return new List()
                    .data(DataFactory.List.simple.data)
                ;
            }
        },
        menu: {
            simple: function () {
                return new Menu()
                    .data(DataFactory.List.simple.data)
                ;
            }
        },
        shape: {
            simple: function () {
                return new Shape();
            }
        },
        surface: {
            simple: function () {
                return new Surface()
                    .title(DataFactory.Surface.simple.title)
                    .menu(DataFactory.Surface.simple.menu)
                    .buttonAnnotations(DataFactory.Surface.simple.buttonAnnotations)
                ;
            }
        },
        resizesurface: {
            simple: function () {
                return new ResizeSurface()
                    .title(DataFactory.Surface.simple.title)
                    .menu(DataFactory.Surface.simple.menu)
                    .buttonAnnotations(DataFactory.Surface.simple.buttonAnnotations)
                ;
            }
        },
        text: {
            simple: function () {
                return new Text()
                    .text(DataFactory.Text.simple.text)
                ;
            }
        },
        textbox: {
            simple: function () {
                return new TextBox()
                    ._text.text(DataFactory.Text.simple.text)
                ;
            }
        }
    };
}));
