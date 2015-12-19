(function(e,t){typeof define=="function"&&define.amd?define(["d3","topojson","./Pins","../graph/Graph","../graph/Edge","../common/Shape","css!./Graph"],t):e.map_Graph=t(e.d3,e.topojson,e.map_Pins,e.graph_Graph,e.graph_Edge,e.common_Shape)})(this,function(e,t,n,r,i,s){function o(){n.call(this)}return o.prototype=Object.create(n.prototype),o.prototype.constructor=o,o.prototype._class+=" map_Graph",o.prototype.data=function(e){var t=n.prototype.data.apply(this,arguments);if(arguments.length){this.dataEdges=[];var r=null;e.forEach(function(e){r&&this.dataEdges.push({type:"LineString",coordinates:[[r[1],r[0]],[e[1],e[0]]]}),r=e},this)}return t},o.prototype.layerEnter=function(t,r,i){n.prototype.layerEnter.apply(this,arguments),r.append("defs").append("marker").attr("class","marker").attr("id",this._id+"_arrowHead").attr("viewBox","0 0 10 10").attr("refX",10).attr("refY",5).attr("markerWidth",16).attr("markerHeight",16).attr("markerUnits","strokeWidth").attr("orient","auto").append("polyline").attr("points","0,0 10,5 0,10 1,5"),this._edgesTransform=r.append("g"),this.edgesPaths=e.select(null)},o.prototype.layerUpdate=function(e){n.prototype.layerUpdate.apply(this,arguments),this.edgesPaths=this._edgesTransform.selectAll(".dataEdge").data(this.visible()?this.dataEdges:[]),this.edgesPaths.enter().append("path").attr("class","dataEdge").attr("marker-end","url(#"+this._id+"_arrowHead)"),this.edgesPaths.attr("d",e._d3GeoPath),this.edgesPaths.exit().remove()},o.prototype.layerZoomed=function(e){n.prototype.layerZoomed.apply(this,arguments),this._edgesTransform.style("opacity",this.opacity()).attr("transform","translate("+e._zoom.translate()+")scale("+e._zoom.scale()+")").style("stroke-width",.5/e._zoom.scale()+"px")},o});