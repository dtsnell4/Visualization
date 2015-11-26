(function(e,t){typeof define=="function"&&define.amd?define(["d3","./CommonND","../common/HTMLWidget"],t):e.google_Scatter=t(e.d3,e.google_CommonND,e.common_HTMLWidget)})(this,function(e,t,n){function r(){t.call(this),this._chartType="ScatterChart"}return r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.prototype._class+=" google_Scatter",r.prototype.publish("aggregationTarget","auto","string","How multiple data selections are rolled up into tooltips: - Group selected data by x-value; - Group selected data by series; - Group selected data by x-value if all selections have the same x-value, and by series otherwise; - Show only one tooltip per selection.  aggregationTarget will often be used in tandem with selectionMode and tooltip.trigger",null,{tags:["Basic"]}),r.prototype.publish("curveType","none","set","Controls the curve of the lines when the line width is not zero. Can be one of the following:  - Straight lines without curve;  - The angles of the line will be smoothed..",["none","function"],{tags:["Basic"]}),r.prototype.publish("pointShape","circle","set",'The shape of individual data elements: "circle", "triangle", "square", "diamond", "star", or "polygon".',["circle","triangle","square","diamond","star","polygon"],{tags:["Basic"]}),r.prototype.publish("pointSize",7,"number","Diameter of data points, in pixels. Use zero to hide all points.",null,{tags:["Basic"]}),r.prototype.publish("pointsVisible",!0,"boolean","Determines whether points will be displayed. Set to false to hide all points.",null,{tags:["Basic"]}),r.prototype.publish("selectionMode","single","set","When selectionMode is , users may select multiple data points.",["single","multiple"],{tags:["Basic"]}),r.prototype.publish("backgroundColor",null,"html-color","The background color for the main area of the chart. Can be either a simple HTML color string, for example:  or '#00cc00', or an object with the following properties.",null,{tags:["Basic"]}),r.prototype.publish("dataOpacity",1,"number","The transparency of data points, with 1.0 being completely opaque and 0.0 fully transparent. This refers to the visible data (i.e. dots).",null,{tags:["Basic"]}),r.prototype.publish("tooltipIsHtml",!0,"boolean","Set to false to use SVG-rendered (rather than HTML-rendered) tooltips.",null,{tags:["Advanced"]}),r.prototype.publish("tooltipTrigger","focus","set","The user interaction that causes the tooltip to be displayed:  - The tooltip will be displayed when the user hovers over the element;  - The tooltip will not be displayed.",["none","focus","selection"],{tags:["Basic"]}),r.prototype.publish("crosshairTrigger","both","set","The crosshair color, expressed as either a color name (e.g., ) or an RGB value (e.g., '#adf').",["both","focus","selection"],{tags:["Basic"]}),r.prototype.publish("crosshairColor",null,"html-color","The crosshair color, expressed as either a color name (e.g., ) or an RGB value (e.g., '#adf').",null,{tags:["Basic"]}),r.prototype.publish("crosshairOpacity",.7,"number","The crosshair opacity, with 0.0 being fully transparent and 1.0 fully opaque.",null,{tags:["Basic"]}),r.prototype.publish("crosshairOrientation",null,"set","The crosshair orientation, which can be  for vertical hairs only,  for horizontal hairs only, or  for traditional crosshairs.",["both","vertical","horizontal"],{tags:["Basic"]}),r.prototype.publish("axisFontSize",null,"number","X/Y Axis Label Font Size",null,{tags:["Basic","Shared"]}),r.prototype.publish("axisFontFamily",null,"string","X/Y Axis Label Font Name",null,{tags:["Basic","Shared"]}),r.prototype.publish("xAxisFontColor",null,"html-color","X Axis Text Font Color",null,{tags:["Basic","Shared"]}),r.prototype.publish("yAxisFontColor",null,"html-color","X Axis Text Font Color",null,{tags:["Basic","Shared"]}),r.prototype.publish("xAxisBaselineColor",null,"html-color","Specifies The Color of The Baseline For The Horizontal Axis",null,{tags:["Intermediate","Shared"]}),r.prototype.publish("yAxisBaselineColor",null,"html-color","Specifies The Color of The Baseline For The Vertical Axis",null,{tags:["Intermediate","Shared"]}),r.prototype.publish("xAxisTitleFontColor",null,"html-color","Horizontal Axis Title Text Style (Color)",null,{tags:["Intermediate","Shared"]}),r.prototype.publish("yAxisTitleFontColor",null,"html-color","Vertical Axis Title Text Style (Color)",null,{tags:["Intermediate","Shared"]}),r.prototype.publish("xAxisTitleFontSize",null,"number","Horizontal Axis Titletext Style (Font Size)",null,{tags:["Intermediate","Shared"]}),r.prototype.publish("yAxisTitleFontSize",null,"number","Vertical Axis Titletext Style (Font Size)",null,{tags:["Intermediate","Shared"]}),r.prototype.publish("xAxisTitleFontFamily",null,"string","Horizontal Axis Title Text Style (Font Name)",null,{tags:["Intermediate","Shared"]}),r.prototype.publish("yAxisTitleFontFamily",null,"string","Vertical Axis Title Text Style (Font Name)",null,{tags:["Intermediate","Shared"]}),r.prototype.publish("xAxisLabelRotation",0,"number","X Axis Label Angle",null,{tags:["Intermediate","Shared"]}),r.prototype.publish("xAxisTitle","","string","X Axis Title",null,{tags:["Basic","Shared"]}),r.prototype.publish("yAxisTitle","","string","Y Axis Title",null,{tags:["Basic","Shared"]}),r.prototype.publish("xAxisFormatType","","set","Format String For Numeric Axis Labels",["","decimal","scientific","currency","percent","short","long"],{tags:["Intermediate"]}),r.prototype.publish("yAxisFormatType","","set","Format String For Numeric Axis Labels",["","decimal","scientific","currency","percent","short","long"],{tags:["Intermediate"]}),r.prototype.publish("xAxisGridlinesCount",5,"number","The Number of Horizontal Gridlines Between Two Regular Gridlines",null,{tags:["Intermediate"]}),r.prototype.publish("yAxisGridlinesCount",5,"number","The Number of Vertical Gridlines Between Two Regular Gridline",null,{tags:["Intermediate"]}),r.prototype.publish("xAxisGridlinesColor",null,"html-color","The Color of The Horizontal Gridlines Inside The Chart Area",null,{tags:["Basic"]}),r.prototype.publish("yAxisGridlinesColor",null,"html-color","The Color of The Vertical Gridlines Inside The Chart Area",null,{tags:["Basic"]}),r.prototype.publish("xAxisMinorGridlinesCount",0,"number","The Number of Horizontal Minor Gridlines Between Two Regular Gridlines",null,{tags:["Intermediate"]}),r.prototype.publish("yAxisMinorGridlinesCount",0,"number","The Number of Vertical Minor Gridlines Between Two Regular Gridlines",null,{tags:["Intermediate"]}),r.prototype.publish("xAxisMinorGridlinesColor",null,"html-color","The Color of The Horizontal Minor Gridlines Inside The Chart Area",null,{tags:["Intermediate"]}),r.prototype.publish("yAxisMinorGridlinesColor",null,"html-color","The Color of The Vertical Minor Gridlines Inside The Chart Area",null,{tags:["Intermediate"]}),r.prototype.publish("xAxisLogScale",!1,"boolean","Makes Horizontal Axis A log Scale",null,{tags:["Advanced"]}),r.prototype.publish("yAxisLogScale",!1,"boolean","Makes Vertical Axis A Log Scale",null,{tags:["Advanced"]}),r.prototype.publish("xAxisTextPosition","out","set","Position of The Horizontal Axis Text, Relative To The Chart Area",["out","in","none"],{tags:["Advanced"]}),r.prototype.publish("yAxisTextPosition","out","set","Position of The Vertical Axis Text, Relative To The Chart Area",["out","in","none"],{tags:["Advanced"]}),r.prototype.publish("xAxisTicks",[],"array","Replaces The Automatically Generated X-Axis Ticks With The Specified Array",null,{tags:["Private"]}),r.prototype.publish("yAxisTicks",[],"array","Replaces The Automatically Generated Y-Axis Ticks With The Specified Array",null,{tags:["Private"]}),r.prototype.publish("xAxisMaxValue",null,"number","Moves The Max Value of The Horizontal Axis To The Specified Value",null,{tags:["Advanced"]}),r.prototype.publish("yAxisMaxValue",null,"number","Moves The Max Value of The Vertical Axis To The Specified Value",null,{tags:["Advanced"]}),r.prototype.publish("xAxisMinValue",null,"number","Moves The Min Value of The Horizontal Axis To The Specified Value",null,{tags:["Advanced"]}),r.prototype.publish("yAxisMinValue",null,"number","Moves The Min Value of The Vertical Axis To The Specified Value",null,{tags:["Advanced"]}),r.prototype.publish("xAxisViewWindowMode","pretty","set","Specifies How To Scale The Horizontal Axis To Render The values Within The Chart Area",["pretty","maximized","explicit"],{tags:["Advanced"]}),r.prototype.publish("yAxisViewWindowMode","pretty","set","Specifies How To Scale The Vertical Axis To Render The Values Within The Chart Area",["pretty","maximized","explicit"],{tags:["Advanced"]}),r.prototype.publish("xAxisViewWindowMax",null,"number","The Maximum Horizontal Data Value To Render",null,{tags:["Advanced"]}),r.prototype.publish("yAxisViewWindowMax",null,"number","The Maximum Vertical Data Value To Render",null,{tags:["Advanced"]}),r.prototype.publish("xAxisViewWindowMin",null,"number","The Minimum Horizontal Data Value To Render",null,{tags:["Advanced"]}),r.prototype.publish("yAxisViewWindowMin",null,"number","The Minimum Vertical Data Value To Render",null,{tags:["Advanced"]}),r.prototype.getChartOptions=function(){var e=t.prototype.getChartOptions.apply(this,arguments);return e.aggregationTarget=this.aggregationTarget(),e.curveType=this.curveType(),e.pointShape=this.pointShape(),e.pointSize=this.pointSize(),e.pointsVisible=this.pointsVisible(),e.selectionMode=this.selectionMode(),e.backgroundColor=this.backgroundColor(),e.dataOpacity=this.dataOpacity(),e.tooltipIsHtml=this.tooltipIsHtml(),e.tooltipTrigger=this.tooltipTrigger(),e.crosshair={color:this.crosshairColor(),orientation:this.crosshairOrientation(),opacity:this.crosshairOpacity(),trigger:this.crosshairTrigger()},e.hAxis={},e.vAxis={},e.hAxis.gridlines={count:this.xAxisGridlinesCount(),color:this.xAxisGridlinesColor()},e.hAxis.minorGridlines={count:this.xAxisMinorGridlinesCount(),color:this.xAxisMinorGridlinesColor()},e.hAxis.logScale=this.xAxisLogScale(),e.hAxis.textPosition=this.xAxisTextPosition(),e.hAxis.minValue=this.xAxisMinValue(),e.hAxis.maxValue=this.xAxisMaxValue(),e.hAxis.slantedText=this.xAxisLabelRotation()!==0,e.hAxis.slantedTextAngle=this.xAxisLabelRotation(),e.hAxis.format=this.xAxisFormatType(),e.hAxis.textStyle={color:this.xAxisFontColor(),fontName:this.axisFontFamily()?this.axisFontFamily():this.fontFamily(),fontSize:this.axisFontSize()?this.axisFontSize():this.fontSize()},this.xAxisTicks().length>0&&(e.hAxis.ticks=this.xAxisTicks()),e.hAxis.titleTextStyle={color:this.xAxisTitleFontColor(),fontName:this.xAxisTitleFontFamily(),fontSize:this.xAxisTitleFontSize()},e.hAxis.viewWindowMode=this.xAxisViewWindowMode(),e.hAxis.viewWindow={min:this.xAxisViewWindowMin(),max:this.xAxisViewWindowMax()},e.vAxis.baselineColor=this.yAxisBaselineColor(),e.vAxis.gridlines={count:this.yAxisGridlinesCount(),color:this.yAxisGridlinesColor()},e.vAxis.minorGridlines={count:this.yAxisMinorGridlinesCount(),color:this.yAxisMinorGridlinesColor()},e.vAxis.logScale=this.yAxisLogScale(),e.vAxis.textPosition=this.yAxisTextPosition(),e.vAxis.title=this.yAxisTitle(),e.vAxis.minValue=this.yAxisMinValue(),e.vAxis.maxValue=this.yAxisMaxValue(),e.vAxis.format=this.yAxisFormatType(),e.vAxis.textStyle={color:this.yAxisFontColor(),fontName:this.axisFontFamily()?this.axisFontFamily():this.fontFamily(),fontSize:this.axisFontSize()?this.axisFontSize():this.fontSize()},this.yAxisTicks().length>0&&(e.vAxis.ticks=this.yAxisTicks()),e.vAxis.titleTextStyle={color:this.yAxisTitleFontColor(),fontName:this.yAxisTitleFontFamily(),fontSize:this.yAxisTitleFontSize()},e.vAxis.viewWindowMode=this.yAxisViewWindowMode(),e.vAxis.viewWindow={min:this.yAxisViewWindowMin(),max:this.yAxisViewWindowMax()},e},r.prototype.enter=function(e,n){t.prototype.enter.apply(this,arguments)},r.prototype.update=function(e,n){t.prototype.update.apply(this,arguments)},r});