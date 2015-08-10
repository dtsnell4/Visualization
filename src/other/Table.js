"use strict";
(function (root, factory) {
    if (typeof define === "function" && define.amd) {
        define(["d3", "../common/HTMLWidget","../other/Paginator", "../other/Bag", "css!./Table"], factory);
    } else {
        root.other_Table = factory(root.d3, root.common_HTMLWidget, root.other_Paginator, root.other_Bag);
    }
}(this, function (d3, HTMLWidget, Paginator, Bag) {
    function Table() {
        HTMLWidget.call(this);
        this._tag = "div";
        this._currentSort = "";
        this._currentSortOrder = 1;
        this._columns = [];
        this._paginator = new Paginator();
        this._selectionBag = new Bag.Selection();
        this._selectionPrevClick = null;
    }
    Table.prototype = Object.create(HTMLWidget.prototype);
    Table.prototype._class += " other_Table";

    Table.prototype.testData = function () {
        this
            .columns(["Lat", "Long", "Pin", "Forth Column", "Fifth Column", "sixth Column", "Seventh Column", "eighth Column", "Nineth Column", "Tenth Column"])
            .data([
                [37.665074, -122.384375, "green-dot.png", 4525, 4243545, 24354, 54, 2552345, 2455, 245435],
                [32.690680, -117.178540, "", 4525, 423545, 24354, 354, 2552345, 2455, 245435],
                [39.709455, -104.969859, "", 4525, 423545, 24354, 524, 2552345, 2455, 245435],
                [41.244123, -95.961610, "", 4525, 423545, 24354, 564, 2552345, 2455, 245435],
                [32.688980, -117.192040, "", 4525, 423545, 24354, 454, 2552345, 2455, 245435],
                [45.786490, -108.526600, "", 4525, 423545, 24354, 534, 2552345, 2455, 245435],
                [45.796180, -108.535652, "", 4525, 423545, 24354, 254, 2552345, 2455, 245435],
                [45.774320, -108.494370, "", 4525, 423545, 24354, 51, 2552345, 2455, 245435],
                [37.665074, -122.384375, "green-dot.png", 4525, 423545, 24354, 504, 2552345, 2455, 245435],
                [32.690680, -117.178540, "", 4525, 423545, 24304, 54, 2552345, 2455, 245435],
                [39.709455, -104.969859, "", 4525, 423545, 249354, 54, 2552345, 2455, 245435],
                [41.244123, -95.961610, "", 4525, 423545, 247354, 54, 2552345, 2455, 245435],
                [32.688980, -117.192040, "", 4525, 423545, 243654, 54, 2552345, 2455, 245435],
                [45.786490, -108.526600, "", 4525, 423545, 245354, 54, 2552345, 2455, 245435],
                [45.796180, -108.535652, "", 4525, 423545, 243354, 54, 2552345, 2455, 245435],
                [45.774320, -108.494370, "", 4525, 423545, 243454, 54, 2552345, 2455, 245435],
                [37.665074, -122.384375, "green-dot.png", 4525, 423545, 243254, 54, 2552345, 2455, 245435],
                [32.690680, -117.178540, "", 4525, 4243545, 24354, 54, 2552345, 2455, 245435],
                [39.709455, -104.969859, "", 4525, 4233545, 24354, 54, 2552345, 2455, 245435],
                [41.244123, -95.961610, "", 4525, 4235145, 24354, 54, 2552345, 2455, 245435],
                [32.688980, -117.192040, "", 4525, 4523545, 24354, 54, 2552345, 2455, 245435],
                [45.786490, -108.526600, "", 4525, 4263545, 24354, 54, 2552345, 2455, 245435],
                [45.796180, -108.535652, "", 4525, 4235745, 24354, 54, 2552345, 2455, 245435],
                [45.774320, -108.494370, "", 4525, 4235845, 24354, 54, 2552345, 2455, 245435],
                [37.665074, -122.384375, "green-dot.png", 4525, 423545, 24354, 54, 2552345, 2455, 245435],
                [32.690680, -117.178540, "", 4525, 423545, 24354, 54, 2552345, 20455, 245435],
                [39.709455, -104.969859, "", 4525, 423545, 24354, 54, 2552345, 24955, 245435],
                [41.244123, -95.961610, "", 4525, 423545, 24354, 54, 2552345, 24855, 245435],
                [32.688980, -117.192040, "", 4525, 423545, 24354, 54, 2552345, 27455, 245435],
                [45.786490, -108.526600, "", 4525, 423545, 24354, 54, 2552345, 24655, 245435],
                [45.796180, -108.535652, "", 4525, 423545, 24354, 54, 2552345, 24555, 245435],
                [45.774320, -108.494370, "", 4525, 423545, 24354, 54, 2552345, 24455, 245435],
                [37.665074, -122.384375, "green-dot.png", 4525, 423545, 24354, 54, 23552345, 2455, 245435],
                [32.690680, -117.178540, "", 4525, 423545, 24354, 54, 2552345, 2455, 2405435],
                [39.709455, -104.969859, "", 4525, 423545, 24354, 54, 2552345, 2455, 2495435],
                [41.244123, -95.961610, "", 4525, 423545, 24354, 54, 2552345, 2455, 2454835],
                [32.688980, -117.192040, "", 4525, 423545, 24354, 54, 2552345, 2455, 2475435],
                [45.786490, -108.526600, "", 4525, 423545, 24354, 54, 2552345, 2455, 2456435],
                [45.796180, -108.535652, "", 4525, 423545, 24354, 54, 2552345, 2455, 2455435],
                [45.774320, -108.494370, "", 4525, 423545, 24354, 54, 2552345, 2455, 2445435],
                [45.777062, -108.549835, "red-dot.png", 4525, 423545, 24354, 54, 25523345, 2455, 245435]
            ])
            .fixedHeader(true)
        ;
        return this;
    };

    Table.prototype.publish("pagination", false, "boolean", "enable or disable pagination",null,{tags:['Private']});
    Table.prototype.publish("fixedHeader", false, "boolean", "enable or disable fixed table header",null,{tags:['Private']});
    Table.prototype.publishProxy("itemsPerPage", "_paginator");
    Table.prototype.publishProxy("pageNumber", "_paginator", "pageNumber",1);

    Table.prototype.enter = function (domNode, element) {
        HTMLWidget.prototype.enter.apply(this, arguments);

        this.table = element.append("table").attr("id", "table" + this._id);
        this.thead = this.table.append("thead").append("tr");
        this.tbody = this.table.append("tbody");
    };

    Table.prototype._generateTempCell = function() {
        var trow = this.tbody.selectAll("tr").data([[0]]);
        trow
            .enter()
            .append("tr")
        ;
        var tcell = trow.selectAll("td").data(function (row, i) {
            return row;
        });
        tcell.enter()
            .append("td")
            .text(function (d) {
                return d;
            })
        ;
        tcell.exit()
            .remove()
        ;
        return tcell;
    };

    Table.prototype._createSelectionObject = function (d) {
        var context = this;
        return {
            _id: d,
            element: function () {
                return context.tbody.selectAll("tr").filter(function (d2) { 
                    return d2 === d; 
                });
            }
        };
    };

    Table.prototype._calcRowsPerPage = function(th) {
        if (this._paginator.numItems() === 0) { // only run on first render
            this._paginator.numItems(1);
            this.itemsPerPage(1);
            this._paginator.render();
        }

        var thHeight = this.calcHeight(th);
        var tcellHeight = this.calcHeight(this._generateTempCell());
        var paginatorHeight = this.calcHeight(this._paginator.element());
        var ipp = Math.ceil((this.height() - thHeight - paginatorHeight) / tcellHeight) || 1;
        return ipp;
    };

    Table.prototype.update = function (domNode, element) {
        HTMLWidget.prototype.update.apply(this, arguments);
        var context = this;
        this._parentElement
            .style("position", "relative")
            .style("overflow", "hidden")
        ;
        
        var th = this.thead.selectAll("th").data(this._columns, function (d) { return d;});
        th
            .enter()
            .append("th")
                .each(function(d) {
                    var element = d3.select(this);
                    element
                        .append("span")
                            .attr("class", "thText")
                    ;
                    element
                        .append("span")
                            .attr("class", "thIcon")
                    ;
                })
            .on("click", function (column, idx) {
                context.headerClick(column, idx);
            })
        ;
        th.select(".thText")
            .text(function (column) {
                return column;
            })
        ;
        th.select(".thIcon")
            .text(function (column, d) {
                if (context._currentSortOrder === -1) {
                    return context._currentSort === d ? "\uf078" : "";
                } else {
                    return context._currentSort === d ? "\uf077" : "";
                }
            })
        ;
        th.exit()
            .remove()
        ;

        if (this.pagination()) {
            if (this._paginator.target() === null) {
                this._paginator.target(domNode);
            }

            var ipp = this._calcRowsPerPage(th);
            this.itemsPerPage(ipp);

            this._paginator.numItems(this._data.length);
            this._tNumPages = Math.ceil(this._paginator.numItems() / this.itemsPerPage()) || 1;
            if (this.pageNumber() > this._tNumPages) { this.pageNumber(1); } // resets if current pagenum selected out of range

            this._paginator._onSelect = function(p, d) {
                context.pageNumber(p);
                context.render();
                return;
            };

        } else {
            this._paginator.numItems(0); // remove widget
        }

        // pageNumber starts at index 1
        var startIndex = this.pageNumber()-1;
        var itemsOnPage = this.itemsPerPage();

        var start = startIndex * itemsOnPage;
        var end = parseInt(startIndex * itemsOnPage) + parseInt(itemsOnPage);

        var tData = null;
        if (this.pagination()) {
            tData = this._data.slice(start,end);
        } else {
            tData = this._data;
        }

        var rows = this.tbody.selectAll("tr").data(tData);
        rows
            .enter()
            .append("tr")
            .on("click.selectionBag", function (d, i) {
                var selected = context.selectionBagClick(d) || [i];
                context.render();
//                var idx = selected[0];
//                while (idx <= selected[selected.length - 1]) {
//                    var el = context._parentElement.selectAll(".rows-wrapper tbody tr")[0][idx];
//                    if (el !== undefined) {
//                        d3.select(el).classed("selected", true);
//                        if (idx === i) {
//                            d3.select(el).classed("hover", true);
//                        }
//                    }   
//                    idx++;
//                }
            })
            .on("click", function (d) {
                context.click(context.rowToObj(d));
            })
            .on("mouseover", function(d, i) {
                var el = context._parentElement.selectAll(".rows-wrapper tbody tr")[0][i];
                d3.select(el).classed("hover", true);
                var that = context.table.selectAll("tbody tr")[0][i];
                d3.select(that).classed("hover", true);
                if (that.className === "selected") {
                    d3.select(el).classed("selected", true);
                };
            })
            .on("mouseout", function(d, i) {
                var el = context._parentElement.selectAll(".rows-wrapper tbody tr")[0][i];
                d3.select(el).classed("hover", false);
                d3.select(context.table.selectAll("tbody tr")[0][i]).classed("hover", false);
            })
        ;

        rows
            .attr("class", function (d, i) {
                if (context._selectionBag.isSelected(context._createSelectionObject(d))) {
                    
                    
                    
 ////////////////////////////DO ON ROWSELECTION
                    
                    
//                    console.log(context._selectionBag, context._createSelectionObject(d));
//                    var xx = d3.selectAll(".rows-wrapper tbody tr")
//                            .filter(function (d, j) { return j === i;})
//                            .classed("fucker", true)
//                    ;
//                        console.log(xx);
//                        xx.exit().remove();
                    return "selected";
                }
            })
        ;

        rows.exit()
            .remove()
        ;

        var cells = rows.selectAll("td").data(function (row, i) {
            return row;
        });
        cells.enter()
            .append("td")
        ;
        cells
            .text(function (d) {
                if (d instanceof String) {
                    return d.trim();
                } else if (d instanceof Object) {
                    return "";
                }
                return d;
            })
        ;
        cells.exit()
            .remove()
        ;
        this._paginator.render();
        
        function fixedLabels(context){
            var divcol = context._parentElement.selectAll(".cols-wrapper").data([0]);
            divcol.enter().append("div").attr("class","cols-wrapper");
            divcol.selectAll(".labels-wrapper").data([0]).enter().append("table").classed("labels-wrapper", true);
            divcol.exit().remove();

            var divrow = context._parentElement.selectAll(".rows-wrapper").data([0]);
            divrow.enter().append("div").attr("class","rows-wrapper");
            divrow.selectAll(".labels-wrapper").data([0]).enter().append("table").classed("labels-wrapper", true);
            divrow.exit().remove();

            var outerTableWrapper = context._parentElement.node();
            var rowsWrapper = context._parentElement.select(".rows-wrapper");
            var colsWrapper = context._parentElement.select(".cols-wrapper");
            var colLabelsWrapper = colsWrapper.select('.labels-wrapper');
            var rowLabelsWrapper = rowsWrapper.select('.labels-wrapper');
            var rowSelection = context.table.selectAll('tbody > tr > td:first-child');
            var rowWrapperWidth = rowSelection.node().getBoundingClientRect().width;
            var theadSelection = context.table.select('thead');
            var colWrapperHeight = theadSelection.node().getBoundingClientRect().height;

            _copyLabelContents(context._id);
            _setOnScrollEvents(domNode);

            function _setOnScrollEvents(domNode){
                domNode.onscroll = function(e){
                    var leftDelta = e.target.scrollLeft;
                    var topDelta = e.target.scrollTop;
                    var height = parseInt(colWrapperHeight);
                    colLabelsWrapper.style("margin-left", -leftDelta + "px");
                    rowLabelsWrapper.style("margin-top", -topDelta + height + "px");
                    rowLabelsWrapper.select("thead").style("margin-top", topDelta - height + "px");
                };
            }
            function _copyLabelContents(){
                var theadSelection = context.table.select('thead');

                colLabelsWrapper.html(theadSelection.html());
                colLabelsWrapper.style("width", context.table.style("width"));
                
                var origThead = element.selectAll("th");
                var newThead = context._parentElement.selectAll(".cols-wrapper th");
                origThead[0].forEach(function(el, i){
                    newThead[0][i].style.width = getComputedStyle(el).getPropertyValue("width");
                });                
                
                newThead.on("click", function(d, idx){
                    context.headerClick(d, idx);
                });
                
                var borderWidth = parseInt(context.table.select("td").style("border-width"));
                
                var rowContents = "<thead><tr><th style='width: " + parseInt(rowWrapperWidth) + parseInt(borderWidth) + "px'>" +  origThead[0][0].innerHTML + "</th></tr></thead>";
                
                rowSelection[0].forEach(function(row){
                    rowContents += '<tr><td class="row-label">'+ row.innerHTML +'</td></tr>';
                });
                rowLabelsWrapper.html(rowContents).style("width", rowWrapperWidth);
                rowLabelsWrapper.select("thead")
                    .style("margin-top", "-" + colWrapperHeight)
                    .style("position", "absolute")
                ;
                rowLabelsWrapper.style("margin-top", colWrapperHeight);
                
                rowLabelsWrapper.selectAll("tr")
                    .on("click", function(d, i) {
                        d3.select(rows[0][i]).on("click.selectionBag")(rows.data()[i-1], i-1)
                        ;
                    })
                    .on("mouseover", function(d, i) {
                        d3.select(rows[0][i]).on("mouseover")(rows.data()[i-1], i-1)
                        ;
                    })
                    .on("mouseout", function(d, i) {
                        d3.select(rows[0][i]).on("mouseout")(rows.data()[i-1], i-1)
                        ;
                    })
                ;
                
                var newTableHeight = parseInt(outerTableWrapper.style.height) - parseInt(colWrapperHeight);
                var newTableWidth = parseInt(outerTableWrapper.style.width) - parseInt(rowWrapperWidth);
                var maxWidth = context.table.node().getBoundingClientRect().width - rowWrapperWidth + context.getScrollbarWidth();
                var finalWidth = newTableWidth > maxWidth ? maxWidth : newTableWidth;
                element
                    .style("width", finalWidth + "px")
                    .style("height", newTableHeight + "px")
                    .style("position", "absolute")
                    .style("top", colWrapperHeight + "px")
                    .style("left", rowWrapperWidth + "px")
                    .style("overflow", "auto")
                ;
                context.table
                    .style("margin-top", "-" + colWrapperHeight + "px")
                    .style("margin-left", "-" + rowWrapperWidth + "px")
                ;
                colsWrapper
                    .style("position", "absolute")
                ;
                rowsWrapper
                    .style("width", rowWrapperWidth + "px")
                    .style("height", newTableHeight + "px")
                    .style("position", "absolute")
                ;
            }
            rowLabelsWrapper.style("margin-top", -domNode.scrollTop + parseInt(colWrapperHeight) + "px");
            rowLabelsWrapper.select("thead")
                .style("margin-top", domNode.scrollTop - parseInt(colWrapperHeight) + "px")
                .on("click", function(d, idx){
                    context.headerClick(d, idx);
                })
            ;
        }
        this.resize();
        if (this.fixedHeader()) {
            fixedLabels(this);
        } else {
            this._parentElement.select(".rows-wrapper").remove();
            this._parentElement.select(".cols-wrapper").remove();
            element
                .style("margin-top", "0")
                .style("margin-left", "0")
                .style("top", "0")
                .style("left", "0")
                .style("width", "100%")
                .style("height", this._parentElement.style("height"))
                .style("overflow", "auto")

            ;
            this.table
                .style("top", "0")
                .style("left", "0")
                .style("margin-top", "0")
                .style("margin-left", "0")
            ;
        }
    };

    Table.prototype.exit = function (domNode, element) {
        this._paginator.target(null);
        HTMLWidget.prototype.exit.apply(this, arguments);
    };

    Table.prototype.headerClick = function (column, idx) {
        var context = this;
        if (this._currentSort !== idx) {
            this._currentSort = idx;
            this._currentSortOrder = 1;
        } else {
            this._currentSortOrder *= -1;
        }
        this._data.sort(function (l, r) {
            if (l[idx] === r[idx]) {
                return 0;
            } else if (typeof (r[idx]) === "undefined" || l[idx] > r[idx]) {
                return context._currentSortOrder;
            }
            return context._currentSortOrder * -1;
        });
        this.render();
    };

    Table.prototype.selection = function (_) {
        if (!arguments.length) return this._selectionBag.get().map(function (d) { return d._id; });
        this._selectionBag.set(_.map(function (row) {
            return this._createSelectionObject(row);
        }, this));
        return this;
    };

    Table.prototype.selectionBagClick = function (d) {
        console.log(d3.event.ctrlKey);
        if (d3.event.shiftKey) {
            var inRange = false;
            var rows = [];
            var selection = this._data.filter(function (row, i) {
                var lastInRangeRow = false;
                if (row === d || row === this._selectionPrevClick) {
                    if (inRange) {
                        lastInRangeRow = true;
                    }
                    inRange = !inRange;
                    rows.push(i);

                }
                return inRange || lastInRangeRow;
            }, this);
            
            this.selection(selection);
            return rows;
        } else {
            this._selectionBag.click(this._createSelectionObject(d), d3.event);
            this._selectionPrevClick = d;
        }
    };

    Table.prototype.click = function (row, column) {
        console.log("Click:  " + JSON.stringify(row) + ", " + column);
    };

    return Table;
}));
