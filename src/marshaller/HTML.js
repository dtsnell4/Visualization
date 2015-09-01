"use strict";
(function (root, factory) {
    if (typeof define === "function" && define.amd) {
        define(["d3", "../layout/Grid", "./HipieDDL", "../layout/Surface", "../layout/Cell"], factory);
    } else {
        root.marshaller_HTML = factory(root.d3, root.layout_Grid, root.marshaller_HipieDDL, root.layout_Surface, root.layout_Cell);
    }
}(this, function (d3, Grid, HipieDDL, Surface, Cell) {
    function HTML() {
        Grid.call(this);
    }
    HTML.prototype = Object.create(Grid.prototype);
    HTML.prototype.constructor = HTML;
    HTML.prototype._class += " marshaller_HTML";

    HTML.prototype.publish("ddlUrl", "", "string", "DDL URL",null,{tags:["Private"]});
    HTML.prototype.publish("databomb", "", "string", "Data Bomb",null,{tags:["Private"]});
    HTML.prototype.publish("proxyMappings", [], "array", "Proxy Mappings",null,{tags:["Private"]});

    HTML.prototype.content = function () {
        return Grid.prototype.content.apply(this, arguments);
    };

    HTML.prototype.setContent = function (row, col, widget, title, rowSpan, colSpan) {
        return Grid.prototype.setContent.apply(this, arguments);
    };

    HTML.prototype.enter = function (domNode, element) {
        Grid.prototype.enter.apply(this, arguments);
    };

    function createGraphData(marshaller, databomb) {
        if (databomb instanceof Object) {
        } else if (databomb){
            databomb = JSON.parse(databomb);
        }
        var curr = null;
        var dashboards = {};
        marshaller.accept({
            visit: function (item) {
                if (item instanceof HipieDDL.Dashboard) {
                    curr = {
                        dashboard: item,
                        visualizations: []
                    };
                    dashboards[item.getQualifiedID()] = curr;
                } else if (item instanceof HipieDDL.DataSource) {
                    if (item.databomb && databomb[item.id]) {
                        item.comms.databomb(databomb[item.id]);
                    }
                } else if (item instanceof HipieDDL.Output) {
                    if (item.dataSource.databomb) {
                        item.dataSource.comms.databombOutput(item.from);
                    }
                } else if (item instanceof HipieDDL.Visualization) {
                    if (item.widget) {
                        curr.visualizations.push(item);
                    }
                }
            }
        });
        return dashboards;
    }

    HTML.prototype.render = function (callback) {
        if (this.ddlUrl() === "" || (this.ddlUrl() === this._prev_ddlUrl && this.databomb() === this._prev_databomb)) {
            return Grid.prototype.render.apply(this, arguments);
        }
        this._prev_ddlUrl = this.ddlUrl();
        this._prev_databomb = this.databomb();

        this.marshaller = new HipieDDL.Marshaller().proxyMappings(this.proxyMappings());
        var context = this;
        if (this.ddlUrl()[0] === "[" || this.ddlUrl()[0] === "{") {
            this.marshaller.parse(this.ddlUrl(), function () {
                postParse();
            });
        } else {
            this.marshaller.url(this.ddlUrl(), function () {
                postParse();
            });
        }
        function postParse() {
            var dashboards = createGraphData(context.marshaller, context.databomb());
            for (var key in dashboards) {
                var cellRow = 0;
                var cellCol = 0;
                var maxCol = Math.floor(Math.sqrt(dashboards[key].visualizations.length));
                dashboards[key].visualizations.forEach(function (viz, idx) {
                    if (idx && (idx % maxCol === 0)) {
                        cellRow++;
                        cellCol = 0;
                    }
                    viz.widget.size({ width: 0, height: 0 });
                    var existingWidget = context.getContent(viz.widget._id);
                    if (existingWidget) {
                        viz.setWidget(existingWidget, true);
                    } else {
                        context.setContent(cellRow, cellCol, viz.widget, viz.title);
                    }
                    cellCol++;
                });
                for (var key2 in dashboards[key].dashboard.datasources) {
                    dashboards[key].dashboard.datasources[key2].fetchData({}, true);
                }
            }
            Grid.prototype.render.call(context, function (widget) {
                if (callback) {
                    callback(widget);
                }
            });
        }
        return this;
    };

    return HTML;
}));
