
(function (root, factory) {
    if (typeof define === "function" && define.amd) {
        define('api/I1DChart.js',["../common/Palette"], factory);
    } else {
        root.api_I1DChart = factory(root.common_Palette);
    }
}(this, function (Palette) {
    function I1DChart() {
    }
    I1DChart.prototype._palette = Palette.rainbow("default");

    //  Events  ---
    I1DChart.prototype.click = function (row, column, selected) {
        console.log("Click:  " + JSON.stringify(row) + ", " + column + ", " + selected);
    };

    return I1DChart;
}));


(function (root, factory) {
    if (typeof define === "function" && define.amd) {
        define('api/I2DChart.js',["../common/Palette"], factory);
    } else {
        root.api_I2DChart = factory(root.common_Palette);
    }
}(this, function (Palette) {
    function I2DChart() {
    }
    I2DChart.prototype._palette = Palette.ordinal("default");

    //  Events  ---
    I2DChart.prototype.click = function (row, column, selected) {
        console.log("Click:  " + JSON.stringify(row) + ", " + column + ", " + selected);
    };

    return I2DChart;
}));

(function (root, factory) {
    if (typeof define === "function" && define.amd) {
        define('api/IGraph.js',[], factory);
    } else {
        root.api_IGraph = factory();
    }
}(this, function () {
    function IGraph() {
    }

    //  Events  ---
    IGraph.prototype.vertex_click = function (d) {
        console.log("Vertex Click: " + d.id());
    };

    IGraph.prototype.edge_click = function (d) {
        console.log("Edge Click: " + d.id());
    };

    return IGraph;
}));


(function (root, factory) {
    if (typeof define === "function" && define.amd) {
        define('api/IInput.js',["../common/Widget"], factory);
    } else {
        root.api_IInput = factory(root.common_Widget);
    }
}(this, function (Widget) {
    function IInput() {
        Widget.call(this);
    }
    IInput.prototype = Object.create(Widget.prototype);

    IInput.prototype.publish("name", "", "string", "HTML name for the input");
    IInput.prototype.publish("label", "", "string", "Descriptive label");
    IInput.prototype.publish("value", "", "string", "Input Current Value");
    IInput.prototype.publish("validate", null, "string", "Input Validation");

    //  Implementation  ---
    IInput.prototype.isValid = function () {
        if (this.validate()) {
            var re = new RegExp(this.validate());
            if (!re.test(this.value())) {
                return false;
            }
        }
        return true;
    };

    //  Events  ---
    IInput.prototype.blur = function (w) {
    };
    IInput.prototype.click = function (w) {
    };
    IInput.prototype.change = function (w) {
    };

    return IInput;
}));


(function (root, factory) {
    if (typeof define === "function" && define.amd) {
        define('api/INDChart.js',["../common/Palette"], factory);
    } else {
        root.api_INDChart = factory(root.common_Palette);
    }
}(this, function (Palette) {
    function INDChart() {
    }
    INDChart.prototype._palette = Palette.ordinal("default");

    //  Events  ---
    INDChart.prototype.click = function (row, column, selected) {
        console.log("Click:  " + JSON.stringify(row) + ", " + column + ", " + selected);
    };

    return INDChart;
}));


(function (root, factory) {
    if (typeof define === "function" && define.amd) {
        define('api/ITooltip.js',["d3", "../common/Widget", "../layout/AbsoluteSurface", "../common/TextBox"], factory);
    } else {
        root.api_ITooltip = factory(root.d3, root.common_Widget, root.layout_AbsoluteSurface, root.common_TextBox);
    }
}(this, function (d3, Widget, AbsoluteSurface, TextBox) {
    function ITooltip() {
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
    ITooltip.prototype = Object.create(Widget.prototype);

    ITooltip.prototype.publish("tooltipOffset", 5, "number", "Offset from the cursor", null, {});

    //  Implementation  ---
    ITooltip.prototype.tooltipShow = function (row, _columns, idx) {
        var context = this;
        if (row !== undefined) {
            this._textBox
                .columns(idx === undefined ? _columns : [_columns[0], _columns[idx]])
                .data([idx === undefined ? row : [row[0], row[idx]]])
                .text(row[0] + ", " + _columns[idx] + ":  " + row[idx])
            ;
            if (!this._tooltip._target) {
                this._tooltip
                    .target(this._parentOverlay.node())
                    .render(function (w) {
                        if (context._textBox._parentElement) {
                            context._textBox._parentElement.style("overflow", "hidden");
                        }
                    })
                ;
            } else {
                this._textBox.render();
            }

            var point = d3.mouse(this._parentOverlay.node());

            var bbox = this._textBox.getBBox(true);
            var x = point[0] - bbox.width / 2;
            if (x < 0) {
                x = 0;
            } else if (x + bbox.width > this.width()) {
                x = this.width() - bbox.width;
            }
            var y = point[1] - bbox.height - this.tooltipOffset();
            if (y < 0) {
                y = point[1] + this.tooltipOffset();
            } else if (y + bbox.height > this.height()) {
                y = this.height() - bbox.height - this.tooltipOffset();
            }
            this._tooltip
                .widgetX(x)
                .widgetY(y)
                .widgetWidth(bbox.width)
                .widgetHeight(bbox.height)
            ;
        }
        this._tooltip
            .visible(row !== undefined)
            .render()
        ;
    };

    return ITooltip;
}));


(function (root, factory) {
    if (typeof define === "function" && define.amd) {
        define('api/ITree.js',["../common/Palette"], factory);
    } else {
        root.api_ITree = factory(root.common_Palette);
    }
}(this, function (Palette) {
    function ITree() {
    }
    ITree.prototype._palette = Palette.ordinal("default");

    //  Events  ---
    ITree.prototype.click = function (d) {
        console.log("Click:  " + d.label);
    };

    return ITree;
}));

