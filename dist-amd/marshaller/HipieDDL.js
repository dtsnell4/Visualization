(function(e,t){typeof define=="function"&&define.amd?define(["d3","../other/Comms","../common/Widget","../common/Utility","require"],t):e.marshaller_HipieDDL=t(e.d3,e.other_Comms,e.common_Widget,e.common_Utility,e.require)})(this,function(e,t,n,r,i){function a(e,t){this.visualization=e,this.mappings=t,this.hasMappings=!1,this.reverseMappings={},this.columns=[],this.columnsIdx={},this.columnsRHS=[],this.columnsRHSIdx={}}function f(e,t){a.call(this,e,t),this.columns=["label","weight"],this.columnsIdx={label:0,weight:1},this.init()}function l(e,t){a.call(this,e,t),t.state?(this.columns=["state","weight"],this.columnsIdx={state:0,weight:1}):t.county&&(this.columns=["county","weight"],this.columnsIdx={county:0,weight:1}),this.init()}function c(e,t){a.call(this,e,t),this.columns=["x","y","weight"],this.columnsIdx={x:0,y:1,weight:2},this.init()}function h(e,t){var n={label:t.x[0]};t.y.forEach(function(e,t){n[e]=e}),a.call(this,e,n),this.init()}function p(e,t){var n={};for(var r in t)t[r].forEach(function(t,r){n[e.label[r]]=t});a.call(this,e,n),this.init()}function d(e,t,n){a.call(this,e,t),this.icon=e.icon||{},this.fields=e.fields||{},this.columns=["uid","label","weight","flags"],this.columnsIdx={uid:0,label:1,weight:2,flags:3},this.init(),this.link=n}function v(e,t){this.visualization=e;if(t){this._id=t.id,this._output=t.output,this.mappings=null,t.mappings||console.log("no mappings for:"+e.id+"->"+t.id);switch(this.visualization.type){case"LINE":this.mappings=new h(this.visualization,t.mappings);break;case"TABLE":this.mappings=new p(this.visualization,t.mappings);break;case"GRAPH":this.mappings=new d(this.visualization,t.mappings,t.link);break;case"CHORO":this.mappings=new l(this.visualization,t.mappings,t.link);break;case"HEAT_MAP":this.mappings=new c(this.visualization,t.mappings,t.link);break;default:this.mappings=new f(this.visualization,t.mappings)}this.first=t.first,this.reverse=t.reverse,this.sort=t.sort}}function m(e,t,n){this.visualization=e,this.eventID=t,n&&(this._updates=n.updates,this.mappings=n.mappings)}function g(e,t){this.visualization=e,this.events={};for(var n in t)this.events[n]=new m(e,n,t[n])}function y(e,t){this.dashboard=e,this.id=t.id,this.label=t.label,this.title=t.title||t.id,this.type=t.type,this.icon=t.icon||{},this.fields=t.fields||{},this.properties=t.properties||(t.source?t.source.properties:null)||{},this.source=new v(this,t.source),this.events=new g(this,t.events);if(this.dashboard.marshaller._widgetMappings.has(t.id))this.setWidget(this.dashboard.marshaller._widgetMappings.get(t.id),!0);else{var n=this;switch(this.type){case"CHORO":this.loadWidget(this.source.mappings.contains("county")?"src/map/ChoroplethCounties":"src/map/ChoroplethStates",function(e){e.id(t.id).paletteID(t.color)});break;case"2DCHART":case"PIE":case"BUBBLE":case"BAR":case"WORD_CLOUD":this.loadWidget("src/chart/MultiChart",function(e){e.id(t.id).chartType(n.properties.chartType||n.properties.charttype||n.type)});break;case"LINE":this.loadWidget("src/chart/MultiChart",function(e){e.id(t.id).showLegend(!0).domainAxisTitle(n.source.getXTitle()).valueAxisTitle(n.source.getYTitle()).chartType(n.properties.chartType||n.properties.charttype||n.type)});break;case"TABLE":this.loadWidget("src/other/Table",function(e){e.id(t.id).columns(n.label)});break;case"SLIDER":this.loadWidget("src/form/Slider",function(e){e.id(t.id);if(t.range){var n="";for(var r in t.events.events.mappings){n=r;break}e.low(+t.range[0]).high(+t.range[1]).step(+t.range[2]).selectionLabel(n)}});break;case"GRAPH":this.loadWidgets(["src/graph/Graph","src/graph/Vertex","src/graph/Edge"],function(e,n){s=n[1],o=n[2],e.id(t.id).layout("ForceDirected2").applyScaleOnLayout(!0)});break;case"FORM":this.loadWidgets(["src/form/Form","src/form/Input"],function(e,n){var r=n[1];e.id(t.id).inputs(t.fields.map(function(e){var t=null,n=[],i=[];switch(e.properties.charttype){case"TEXT":t="textbox";break;case"TEXTAREA":t="textarea";break;case"CHECKBOX":t="checkbox";break;case"RADIO":t="radio";break;case"HIDDEN":t="hidden";break;default:if(e.properties.enumvals){t="select",i=e.properties.enumvals;for(var s in i)n.push([s,i[s]])}else t="textbox"}var o=(new r).name(e.id).label((e.properties?e.properties.label:null)||e.label).type(t).value(e.properties.default?e.properties.default:"");if(t==="checkbox"||t==="radio"){var u=Object.keys(e.properties.enumvals);o.selectOptions(u)}else n.length&&o.selectOptions(n);return o}))});break;case"HEAT_MAP":this.loadWidgets(["src/other/HeatMap"],function(e,r){e.id(t.id).image(n.properties.imageUrl)});break;default:this.loadWidget("src/common/TextBox",function(e){e.id(t.id).text(n.id+"\n"+"TODO:  "+n.type)})}}}function b(e,t){this.dataSource=e,this.id=t.id,this.from=t.from,this.request={},this.notify=t.notify||[],this.filter=t.filter||[]}function w(e,n,r){this.dashboard=e,this.id=n.id,this.filter=n.filter||[],this.WUID=n.WUID,this.URL=n.URL,this.databomb=n.databomb,this.request={},this._loadedCount=0;var i=this;this.outputs={};var s=[];n.outputs.forEach(function(e){i.outputs[e.id]=new b(i,e),s.push({id:e.id,from:e.from,filter:e.filter||this.filter})},this),this.WUID?this.comms=(new t.HIPIEWorkunit).url(e.marshaller.espUrl._url).proxyMappings(r).hipieResults(s):this.databomb?this.comms=(new t.HIPIEDatabomb).hipieResults(s):this.comms=(new t.HIPIERoxie).url(n.URL).proxyMappings(r)}function E(e,t,n){this.marshaller=e,this.id=t.id,this.title=t.title;var r=this;this.datasources={},this.datasourceTotal=0,t.datasources.forEach(function(e){r.datasources[e.id]=new w(r,e,n),++r.datasourceTotal}),this._visualizations={},this._visualizationArray=[],t.visualizations.forEach(function(e){var t=new y(this,e);this._visualizations[e.id]=t,this._visualizationArray.push(t),this.marshaller._visualizations[e.id]=t,this.marshaller._visualizationArray.push(t)},this),this._visualizationTotal=this._visualizationArray.length}function S(){this._proxyMappings={},this._widgetMappings=e.map()}var s=null,o=null,u=function(e,t){var n=e.split("."),r=t;for(var i=0;i<n.length;++i){var s=n[i];if(!r||r[s]===undefined)return!1;r=r[s]}return!0};return a.prototype.init=function(){for(var e in this.mappings)this.reverseMappings[this.mappings[e]]=e,this.columnsIdx[e]===undefined&&(this.columns.push(e),this.columnsIdx[e]=this.columns.length-1),this.columnsRHS[this.columnsIdx[e]]=this.mappings[e],this.columnsRHSIdx[this.mappings[e]]=this.columnsIdx[e],this.hasMappings=!0},a.prototype.contains=function(e){return this.mappings[e]!==undefined},a.prototype.doMap=function(e){var t=[];for(var n in this.mappings){var r=this.mappings[n];try{var i=e[r];i===undefined&&(i=e[r.toLowerCase()]);if(i===undefined&&r.indexOf("_AVE")===r.length-4&&e.base_count!==undefined){var s=r.substring(0,r.length-4)+"_SUM";i=e[s],i===undefined&&(i=e[s.toLowerCase()]),i&&(i/=e.base_count)}t[this.columnsIdx[n]]=i}catch(o){console.log("Invalid Mapping:  "+this.visualization.id+" ["+r+"->"+e+"]")}}return t},a.prototype.doMapAll=function(e){var t=this;return e.map(function(e){return t.doMap(e)})},a.prototype.getMap=function(e){return this.mappings[e]},a.prototype.getReverseMap=function(e){return this.reverseMappings[e]},f.prototype=Object.create(a.prototype),l.prototype=Object.create(a.prototype),c.prototype=Object.create(a.prototype),h.prototype=Object.create(a.prototype),p.prototype=Object.create(a.prototype),d.prototype=Object.create(a.prototype),d.prototype.calcAnnotation=function(e,t,n){function i(e){return e?String.fromCharCode(parseInt(e)):e}function s(e,t){if(e)for(var r in e)switch(r){case"faChar":t.faChar=i(e.faChar);break;case"tooltip":t[r]=e[r];break;case"icon_image_colorFill":case"icon_shape_colorFill":case"icon_shape_colorStroke":n?t[r.split("icon_")[1]]=e[r]:t[r]=e[r];break;case"textbox_image_colorFill":case"textbox_shape_colorFill":case"textbox_shape_colorStroke":n||(t[r]=e[r]);break;case"id":case"valuemappings":case"font":case"charttype":break;default:console.log("Unknown annotation property:  "+r)}}var r={};s(e,r);if(t&&t[e.id]&&e.valuemappings){var o=e.valuemappings[t[e.id]];s(o,r)}for(var u in r)return r;return null},d.prototype.doMapAll=function(e){function i(e,i){var o="uid_"+e[0],u=n[o];u||(u=(new s).faChar("").text(e[1]),u.__hpcc_uid=e[0],n[o]=u,r.push(u));if(i){var a=t.calcAnnotation(t.visualization.icon,i);if(a)for(var f in a)u[f]&&u[f](a[f]);var l=[];t.fields.forEach(function(e){var n=t.calcAnnotation(e,i,!0);n&&l.push(n)}),u.annotationIcons(l)}return u}var t=this,n={},r=[],u=[];return e.forEach(function(e){var n=t.doMap(e),r=i(n,e);if(e[t.link.childfile]&&e[t.link.childfile].Row){var s=e[t.link.childfile].Row;s.forEach(function(e,n){var s=t.doMap(e),a=i(s);if(r.id()!==a.id()){var f=(new o).sourceVertex(r).targetVertex(a).sourceMarker("circleFoot").targetMarker("arrowHead");u.push(f)}})}}),{vertices:r,edges:u,merge:!1}},v.prototype.getQualifiedID=function(){return this.visualization.getQualifiedID()+"."+this.id},v.prototype.exists=function(){return this._id},v.prototype.getDatasource=function(){return this.visualization.dashboard.datasources[this._id]},v.prototype.getOutput=function(){var e=this.getDatasource();return e&&e.outputs?e.outputs[this._output]:null},v.prototype.hasData=function(){return this.getOutput().data?!0:!1},v.prototype.getColumns=function(){return this.mappings.columns},v.prototype.getData=function(){var t=this,n=this.getOutput().data;return this.sort&&n.sort(function(n,r){for(var i=0;i<t.sort.length;++i){var s=t.sort[i],o=!1;s.indexOf("-")===0&&(s=s.substring(1),o=!0);var u=n[s];u===undefined&&(u=n[s.toLowerCase()]);var a=r[s];a===undefined&&(a=r[s.toLowerCase()]);if(u!==a)return o?e.descending(u,a):e.ascending(u,a)}return 0}),this.reverse&&n.reverse(),this.first&&n.length>this.first&&(n.length=this.first),this.mappings.doMapAll(n)},v.prototype.getXTitle=function(){return this.mappings.columns[0]},v.prototype.getYTitle=function(){return this.mappings.columns.filter(function(e,t){return t>0}).join(" / ")},m.prototype.exists=function(){return this._updates!==undefined},m.prototype.getUpdates=function(){var e=[];return u("_updates",this)&&this._updates instanceof Array&&this._updates.forEach(function(t,n){var r=this.visualization.dashboard.datasources[t.datasource],i=this.visualization.dashboard.getVisualization(t.visualization);e.push({eventID:this.eventID,datasource:r,visualization:i})},this),e},m.prototype.getUpdatesDatasources=function(){var e={},t=[];return this.getUpdatesVisualizations().forEach(function(n,r){var i=n.source.getDatasource();i&&!e[i.id]&&(e[i.id]=!0,t.push(i))},this),t},m.prototype.getUpdatesVisualizations=function(){var e={},t=[];return u("_updates",this)&&this._updates instanceof Array&&this._updates.forEach(function(n,r){var i=this.visualization.dashboard.getVisualization(n.visualization);e[i.id]||(e[i.id]=!0,t.push(i))},this),t},g.prototype.setWidget=function(e){var t=this;for(var n in this.events)e["vertex_"+n]?e["vertex_"+n]=function(e){t.visualization.onEvent(n,t.events[n],e)}:e[n]&&(e[n]=function(e,r,i){t.visualization.onEvent(n,t.events[n],e,r,i)})},g.prototype.exists=function(){return this._updates!==undefined},g.prototype.getUpdates=function(){var e=[];for(var t in this.events)e=e.concat(this.events[t].getUpdates());return e},g.prototype.getUpdatesDatasources=function(){var e=[];for(var t in this.events)e=e.concat(this.events[t].getUpdatesDatasources());return e},g.prototype.getUpdatesVisualizations=function(){var e=[];for(var t in this.events)e=e.concat(this.events[t].getUpdatesVisualizations());return e},y.prototype.getQualifiedID=function(){return this.id},y.prototype.isLoading=function(e,t){return this.widget===null},y.prototype.isLoaded=function(e,t){return this.widget instanceof n},y.prototype.loadWidget=function(e,t){this.loadWidgets([e],t)},y.prototype.loadWidgets=function(e,t){this.widget=null;var n=this;i(e,function(e){n.setWidget(new e),t&&t(n.widget,arguments)})},y.prototype.setWidget=function(e,t){this.widget=e,this.events.setWidget(e);if(!t)if(e.classID()==="chart_MultiChart")e.chartTypeProperties(this.properties);else for(var n in this.properties)if(this.widget[n])try{this.widget[n](this.properties[n])}catch(r){console.log("Invalid Property:"+this.id+".properties."+n)}return this.widget},y.prototype.accept=function(e){e.visit(this)},y.prototype.update=function(){var e=this.source.getOutput().getParams();u("widgetSurface.title",this)?(this.widgetSurface.title(this.title+(e?" ("+e+")":"")),this.widgetSurface.render()):this.widget.render()},y.prototype.notify=function(){if(this.source.hasData()&&this.widget){var e=this.source.getColumns();this.widget.columns(e);var t=this.source.getData();this.dashboard.marshaller.updateViz(this,t),this.widget.data(t),this.update()}},y.prototype.clear=function(){this.widget&&(this.widget.data([]),this.source.getOutput().request={}),this._eventValues&&(delete this._eventValues,this.events.getUpdatesVisualizations().forEach(function(e){e.clear()})),this.update()},y.prototype.onEvent=function(e,t,n,r,i){var s=this;setTimeout(function(){i=i===undefined?!0:i;if(t.exists()){var e={};for(var r in t.mappings){var o=s.source.mappings&&s.source.mappings.hasMappings?s.source.mappings.getReverseMap(r):r;e[t.mappings[r]]=i?n[o]:""}s._eventValues=e;var u={},a=t.getUpdatesVisualizations();a.forEach(function(e){var t=e.source.getDatasource();u[t.id]||(u[t.id]={datasource:t,request:{},updates:[]}),u[t.id].updates.push(e.id),e.getInputVisualizations().forEach(function(e,n){if(e._eventValues)for(var r in e._eventValues)u[t.id].request[r]&&u[t.id].request[r]!==e._eventValues[r]&&console.log("Duplicate Filter, with mismatched value:  "+r+"="+e._eventValues[r]),u[t.id].request[r]=e._eventValues[r],u[t.id].request[r+"_changed"]=e===s}),e.clear(),(t.WUID||t.databomb)&&t.fetchData(u[t.id].request,!1,[e.id])});for(var f in u)!u[f].datasource.WUID&&!u[f].datasource.databomb&&u[f].datasource.fetchData(u[f].request,!1,u[f].updates)}},0)},y.prototype.getInputVisualizations=function(){return this.dashboard.marshaller.getVisualizationArray().filter(function(e){var t=e.events.getUpdatesVisualizations();return t.indexOf(this)>=0?!0:!1},this)},b.prototype.getQualifiedID=function(){return this.dataSource.getQualifiedID()+"."+this.id},b.prototype.getParams=function(){var e="";for(var t in this.request)r.endsWith(t,"_changed")||(e.length&&(e+=", "),e+=this.request[t]);return e},b.prototype.accept=function(e){e.visit(this)},b.prototype.setData=function(e,t,n){var r=this;this.request=t,this.data=e,this.notify.forEach(function(e){if(!n||n.indexOf(e)>=0){var t=r.dataSource.dashboard.getVisualization(e);t.notify()}})},w.prototype.getQualifiedID=function(){return this.dashboard.getQualifiedID()+"."+this.id},w.prototype.accept=function(e){e.visit(this);for(var t in this.outputs)this.outputs[t].accept(e)},w.prototype.fetchData=function(e,t,n){if(!n){n=[];for(var r in this.outputs){var i=this.outputs[r];(!i.filter||!i.filter.length)&&i.notify.forEach(function(e){n.push(e)})}}var s=this;this.request.refresh=t?!0:!1,this.filter.forEach(function(t){this.request[t+"_changed"]=e[t+"_changed"]||!1;var n=e[t]===undefined?"":e[t];this.request[t]!==n&&(this.request[t]=n)},this),window.__hpcc_debug&&console.log("fetchData:  "+JSON.stringify(n)+"("+JSON.stringify(e)+")"),this.comms.call(this.request,function(t){s.processResponse(t,e,n),++s._loadedCount})},w.prototype.processResponse=function(e,t,n){var r={};for(var i in e)r[i.toLowerCase()]=e[i];for(var s in this.outputs){var o=this.outputs[s].from;o||(o=this.outputs[s].id.toLowerCase());if(u(o,e))(!u(o+"_changed",e)||u(o+"_changed",e)&&e[o+"_changed"].length&&e[o+"_changed"][0][o+"_changed"])&&this.outputs[s].setData(e[o],t,n);else if(u(o,r))console.log("DDL 'DataSource.From' case is Incorrect"),(!u(o+"_changed",r)||u(o+"_changed",r)&&e[o+"_changed"].length&&r[o+"_changed"][0][o+"_changed"])&&this.outputs[s].setData(r[o],t,n);else{var a=[];for(var f in e)a.push(f);console.log("Unable to locate '"+o+"' in response {"+a.join(", ")+"}")}}},E.prototype.getQualifiedID=function(){return this.id},E.prototype.getVisualization=function(e){return this._visualizations[e]||this.marshaller.getVisualization(e)},E.prototype.getVisualizations=function(){return this._visualizations},E.prototype.getVisualizationArray=function(){return this._visualizationArray},E.prototype.getVisualizationTotal=function(){return this._visualizationTotal},E.prototype.accept=function(e){e.visit(this);for(var t in this.datasources)this.datasources[t].accept(e);this._visualizationArray.forEach(function(t){t.accept(e)},this)},E.prototype.allVisualizationsLoaded=function(){var e=this._visualizationArray.filter(function(e){return!e.isLoaded()});return e.length===0},S.prototype.commsDataLoaded=function(){for(var e=0;e<this.dashboardArray.length;e++)for(var t in this.dashboardArray[e].datasources)if(this.dashboardArray[e].datasources[t]._loadedCount===0)return!1;return!0},S.prototype.getVisualization=function(e){return this._visualizations[e]},S.prototype.accept=function(e){e.visit(this),this.dashboardTotal=0;for(var t in this.dashboards)this.dashboards[t].accept(e),++this.dashboardTotal},S.prototype.url=function(e,n){this.espUrl=(new t.ESPUrl).url(e);var r=null,i="HIPIE_DDL";this.espUrl.isWorkunitResult()?(i=this.espUrl._params.ResultName,r=(new t.HIPIEWorkunit).url(e).proxyMappings(this._proxyMappings)):r=(new t.HIPIERoxie).url(e).proxyMappings(this._proxyMappings);var s={refresh:!1},o=this;r.call(s,function(t){u(i,t)&&r.fetchResult(i,function(r){var s=r[0][i],u=s.split("<RoxieBase>\\");if(u.length>1){var a=u[1].indexOf('"');u[1]=u[1].substring(a),s=u.join(e)}o.parse(s,function(){n(t)})})})},S.prototype.proxyMappings=function(e){return arguments.length?(this._proxyMappings=e,this):this._proxyMappings},S.prototype.widgetMappings=function(e){return arguments.length?(this._widgetMappings=e,this):this._widgetMappings},S.prototype.parse=function(e,t){var n=this;return this._json=e,this._jsonParsed=JSON.parse(this._json),this.dashboards={},this.dashboardArray=[],this._visualizations={},this._visualizationArray=[],this._jsonParsed.forEach(function(e){var t=new E(n,e,n._proxyMappings);n.dashboards[e.id]=t,n.dashboardArray.push(t)}),this.dashboardTotal=this.dashboardArray.length,this.ready(t),this},S.prototype.getVisualizations=function(){return this._visualizations},S.prototype.getVisualizationArray=function(){return this._visualizationArray},S.prototype.allDashboardsLoaded=function(){return this.dashboardArray.filter(function(e){return!e.allVisualizationsLoaded()}).length===0},S.prototype.ready=function(e){function n(e){t.allDashboardsLoaded()?e():setTimeout(n,100,e)}if(!e)return;var t=this;n(e)},S.prototype.updateViz=function(e,t){},{exists:u,Marshaller:S,Dashboard:E,DataSource:w,Output:b,Visualization:y}});