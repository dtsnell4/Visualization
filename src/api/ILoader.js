"use strict";
(function (root, factory) {
    if (typeof define === "function" && define.amd) {
        define(["d3", "../common/Widget", "../layout/AbsoluteSurface", "../common/TextBox"], factory);
    } else {
        root.api_ILoader = factory(root.d3, root.common_Widget, root.layout_AbsoluteSurface, root.common_TextBox);
    }
}(this, function (d3, Widget, AbsoluteSurface, TextBox) {
    function ILoader() {
        Widget.call(this);

        this._textBox = new TextBox()
            .shape_colorFill("#FFFFFA")
            .shape_colorStroke("#E6E6E1")
        ;
        this._tooltip = new AbsoluteSurface()
            .units("pixels")
            .widget(this._textBox)
            .visible(false)

        ;
    }
    ILoader.prototype = Object.create(Widget.prototype);

    ILoader.prototype.publish("tooltipOffset", 5, "number", "Offset from the cursor", null, {});

    //  Implementation  ---
    ILoader.prototype.showLoader = function (show) {
        console.log("ll");
        var context = this;
        if (show) {
            this._textBox
                .text("Loading...")
            ;
            if (this._tooltip._renderCount === 0) {
                this._tooltip
                    .target(this.target())
                    .render(function (w) {
                        context._tooltip._parentElement
                        .style("overflow", "hidden")
                        .style("top", "0")
                        .style("position", "absolute");
                    })
                ;
            } else {
                this._textBox.render();
            }

            // var point = d3.mouse(this._parentOverlay.node());

            // var bbox = this._textBox.getBBox(true);
            // var x = point[0] - bbox.width / 2;
            // if (x < 0) {
            //     x = 0;
            // } else if (x + bbox.width > this.width()) {
            //     x = this.width() - bbox.width;
            // }
            // var y = point[1] - bbox.height - this.tooltipOffset();
            // if (y < 0) {
            //     y = point[1] + this.tooltipOffset();
            // } else if (y + bbox.height > this.height()) {
            //     y = this.height() - bbox.height - this.tooltipOffset();
            // }
            // this._tooltip
            //     .widgetX(x)
            //     .widgetY(y)
            //     .widgetWidth(bbox.width)
            //     .widgetHeight(bbox.height)
            // ;
        }
        this._tooltip
            .visible(show)
            .render()
        ;
    };

    return ILoader;
}));
