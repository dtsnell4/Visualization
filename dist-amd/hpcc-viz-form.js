define("css!src/form/Input",[],function(){}),function(e,t){typeof define=="function"&&define.amd?define("src/form/Input",["d3","../common/HTMLWidget","../api/IInput","css!./Input"],t):e.form_Input=t(e.d3,e.common_HTMLWidget,e.api_IInput)}(this,function(e,t,n){function r(){t.call(this),n.call(this),this._tag="div",this._inputElement=[]}return r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.prototype._class+=" form_Input",r.prototype.implements(n.prototype),r.prototype.publish("type","text","set","Input type",["html-color","number","checkbox","button","select","textarea","date","text","range","search","email","time","datetime"]),r.prototype.publish("selectOptions",[],"array","Array of options used to fill a dropdown list"),r.prototype.publish("low",null,"number","Minimum value for Range input"),r.prototype.publish("high",null,"number","Maximum value for Range input"),r.prototype.publish("step",null,"number","Step value for Range input"),r.prototype.enter=function(e,n){t.prototype.enter.apply(this,arguments),this.createInput(n)},r.prototype.update=function(n,r){t.prototype.update.apply(this,arguments);var i=this;this._inputElement.forEach(function(e){e.attr("name",i.name())});switch(this.type()){case"select":this.checkNodeName("SELECT",r),this.insertSelectOptions(this.selectOptions()),this._inputElement[0].property("value",this.value());break;case"textarea":this.checkNodeName("TEXTAREA",r),this._inputElement[0].property("value",this.value());break;case"button":this.checkNodeName("BUTTON",r),this._inputElement[0].text(this.value());break;case"radio":case"checkbox":this.checkNodeName("INPUT",r),this._inputElement.forEach(function(e,t){e.property("value",i.selectOptions()[t]),i.value().indexOf(i.selectOptions()[t])!==-1&&i.value()!=="false"?e.property("checked",!0):e.property("checked",!1)});break;case"html-color":this.checkNodeName("INPUT",r),this._inputElement[0].attr("type","text"),this._inputElement[1].attr("type","color"),this._inputElement[0].property("value",this.value()),this._inputElement[1].property("value",e.rgb(this.value()).toString());break;case"range":this.checkNodeName("INPUT",r),this._inputElement[0].attr("type","range"),this._inputElement[0].property("value",this.value()),this._inputElement[0].attr("min",this.low()),this._inputElement[0].attr("max",this.high()),this._inputElement[0].attr("step",this.step()),this._inputElement[1].attr("type","number"),this._inputElement[1].property("value",this.value()),this._inputElement[1].attr("min",this.low()),this._inputElement[1].attr("max",this.high()),this._inputElement[1].attr("step",this.step());break;default:this.checkNodeName("INPUT",r),this._inputElement[0].attr("type",this.type()),this._inputElement[0].property("value",this.value())}},r.prototype.createInput=function(t){var n=this;switch(this.type()){case"select":this._inputElement[0]=t.append("select");break;case"textarea":this._inputElement[0]=t.append("textarea");break;case"button":this._inputElement[0]=t.append("button");break;case"radio":case"checkbox":var r=t.append("ul");this.selectOptions().length||this.selectOptions().push(""),this.selectOptions().forEach(function(e,t){n._inputElement[t]=r.append("li").append("input").attr("type",n.type()),n._inputElement[t].node().insertAdjacentHTML("afterend","<text>"+e+"</text>")});break;case"html-color":this._inputElement[0]=t.append("input").attr("type","text"),this._inputElement[0].classed("color-text",!0),this._inputElement[1]=t.append("input").attr("type","color");break;case"range":this._inputElement[0]=t.append("input").attr("type","range"),this._inputElement[1]=t.append("input").attr("type","number");break;default:this._inputElement[0]=t.append("input").attr("type",this.type())}this._inputElement.forEach(function(e,t){e.on("click",function(e){e.click(e)})}),this._inputElement.forEach(function(e,t){e.on("blur",function(e){e.blur(e)})}),this._inputElement.forEach(function(t,r){t.on("change",function(i){switch(n.type()){case"checkbox":var s=[];n._inputElement.forEach(function(e,t){e.property("checked")&&s.push(e.property("value"))}),n.value(s);break;case"range":case"html-color":r===0?(n._inputElement[1].property("value",e.rgb(n._inputElement[0].property("value")).toString()),n.value(n._inputElement[0].property("value"))):(n._inputElement[0].property("value",n._inputElement[1].property("value")),n.value(e.rgb(n._inputElement[1].property("value")).toString()));break;default:n.value([t.property("value")])}i.change(i)})})},r.prototype.insertSelectOptions=function(e){var t="";e.length>0?e.forEach(function(e){var n=e instanceof Array?e[0]:e,r=e instanceof Array?e[1]?e[1]:e[0]:e;t+="<option value='"+n+"'>"+r+"</option>"}):t+="<option>selectOptions not set</option>",this._inputElement[0].html(t)},r.prototype.checkNodeName=function(e,t){var n=this._inputElement.some(function(t){if(t.node().nodeName!==e)return!0});n&&(this._inputElement.forEach(function(e){e.node().remove()}),this.createInput(t))},r.prototype.resetValue=function(e){e.type()==="checkbox"?e.value(e._inputElement.node().checked):e.value(e._inputElement.node().value)},r}),define("css!src/form/Slider",[],function(){}),function(e,t){typeof define=="function"&&define.amd?define("src/form/Slider",["d3","../common/SVGWidget","../api/IInput","../common/Icon","css!./Slider"],t):e.form_Slider=t(e.d3,e.common_SVGWidget,e.api_IInput,e.common_Icon)}(this,function(e,t,n,r){function i(){t.call(this),n.call(this),this.selectionLabel(""),this._playing=!1,this._loop=!1,this.xScale=e.scale.linear().clamp(!0);var i=this;this._playIcon=(new r).faChar(""),this._playIcon.click=function(t){e.event.stopPropagation(),i._playing?i.pause():i.play()},this._loopIcon=(new r).faChar("").image_colorFill(this._loop?null:"#bbb").shape_colorFill(this._loop?null:"white").paddingPercent(33),this._loopIcon.click=function(e){i._loop?i._loop=!1:i._loop=!0,i._loopIcon.image_colorFill(i._loop?null:"#bbb").shape_colorFill(i._loop?null:"white").render()},this.brush=e.svg.brush().x(this.xScale).extent([0,0]).on("brushstart",function(e){i.brushstart(e,this)}).on("brush",function(e){i.brushmove(e,this)}).on("brushend",function(e){i.brushend(e,this)}),this.brush.empty=function(){return!1},this.axis=e.svg.axis().scale(this.xScale).orient("bottom").tickValues(null).tickFormat(function(e){return e}).tickSize(0).tickPadding(12)}return i.prototype=Object.create(t.prototype),i.prototype.constructor=i,i.prototype._class+=" form_Slider",i.prototype.implements(n.prototype),i.prototype.publish("padding",16,"number","Outer Padding",null,{tags:["Basic"]}),i.prototype.publish("fontSize",null,"number","Font Size",null,{tags:["Basic"]}),i.prototype.publish("fontFamily",null,"string","Font Name",null,{tags:["Basic"]}),i.prototype.publish("fontColor",null,"html-color","Font Color",null,{tags:["Basic"]}),i.prototype.publish("allowRange",!1,"boolean","Allow Range Selection",null,{tags:["Intermediate"]}),i.prototype.publish("low",0,"number","Low",null,{tags:["Intermediate"]}),i.prototype.publish("high",100,"number","High",null,{tags:["Intermediate"]}),i.prototype.publish("step",10,"number","Step",null,{tags:["Intermediate"]}),i.prototype.publish("selectionLabel","","string","Selection Label",null,{tags:["Intermediate"]}),i.prototype.publish("showPlay",!1,"boolean","Show Play Button"),i.prototype.publish("playInterval",1e3,"number","Play Interval"),i.prototype.publishProxy("playDiameter","_playIcon","diameter",32),i.prototype.publish("playGutter",12,"number","Play Gutter"),i.prototype.publishProxy("loopDiameter","_loopIcon","diameter",24),i.prototype.publish("loopGutter",4,"number","Play Gutter"),i.prototype.name=function(e){return i.prototype.columns.apply(this,arguments)},i.prototype.value=function(e){return i.prototype.data.apply(this,arguments)},i.prototype.play=function(){this._playing=!0,this._playIcon.faChar("").render();var e=this.data();if(e<this.low()||e>=this.high())e=this.low(),this.data(e).render(),this._click();var t=this;this.intervalHandler=setInterval(function(){e+=t.step(),e>t.high()?t._loop===!0?(e=t.low(),t.data(e).render(),t._click()):t.pause():(t.data(e).render(),t._click())},t.playInterval())},i.prototype.pause=function(){this._playing=!1,this._playIcon.faChar("").render(),clearInterval(this.intervalHandler)},i.prototype.data=function(e){var n=t.prototype.data.apply(this,arguments);return arguments.length&&this.brushg&&this.brushg.call(this.brush.extent(this.allowRange()?this.data():[this.data(),this.data()])),n},i.prototype.enter=function(e,t){this.sliderElement=t.append("g"),this.axisElement=this.sliderElement.append("g").attr("class","x axis"),this.brushg=this.sliderElement.append("g").attr("class","brush").call(this.brush),this.brushg.select(".background").attr("y",-9).attr("height",18),this.brushg.select(".extent").attr("y","-10").attr("height","20"),this.brushg.selectAll(".resize").select("rect").attr("x",function(e){return e==="e"?0:-8}).attr("y","-10").attr("width","8").attr("height","20"),this.handle=this.brushg.selectAll(".resize").append("path").attr("class","handle").attr("transform","translate(0,-27)"),this._playIcon.target(this.sliderElement.node()).render(),this._loopIcon.target(this.sliderElement.node()).render()},i.prototype.calcDelta=function(e,t,n,r){var i=t.append("g").attr("class","x axis").attr("transform","translate(0, -64)").call(this.axis);i.selectAll(".tick > text").style("fill",this.fontColor()).style("font-size",this.fontSize()).style("font-family",this.fontFamily());var s=i.node().getBBox(),o={left:s.x-n,right:s.x-n+s.width-r};return i.remove(),o},i.prototype.update=function(t,n){var r=this,i=-this.width()/2+this.padding(),s=this.width()-this.padding()*2;this._playIcon.pos({x:s/2-(this.loopDiameter()+this.loopGutter()+this.playDiameter()/2),y:0}).diameter(this.playDiameter()).display(this.showPlay()).render(),this._loopIcon.pos({x:s/2-this.loopDiameter()/2,y:0}).diameter(this.loopDiameter()).display(this.showPlay()).render(),(this.high()-this.low())/this.step()<=10?this.axis.tickValues(e.merge([e.range(this.low(),this.high(),this.step()),[this.high()]])):this.axis.tickValues(null),s-=this.showPlay()?this.loopDiameter()+this.loopGutter()+this.playDiameter()+this.playGutter():0,this.xScale.domain([this.low(),this.high()]).range([i,i+s]);var o=this.calcDelta(t,n,i,s);this.xScale.range([i-o.left,i+s-o.right]),this.axisElement.call(this.axis),this.axisElement.selectAll(".tick > text").style("fill",this.fontColor()).style("font-size",this.fontSize()).style("font-family",this.fontFamily());var u=this.xScale.range();this.brushg.select(".background").attr("x",u[0]).attr("width",u[1]-u[0]),this.handle.attr("d",function(e){return r.handlePath(e)}),this.data().length===0&&(this.allowRange()?this.data([this.low(),this.low()]):this.data(this.low())),this.brushg.call(this.brush.extent(this.allowRange()?this.data():[this.data(),this.data()]));var a=this.sliderElement.node().getBBox();this.sliderElement.attr("transform","translate(0, "+ -(a.y+a.height/2)+")")},i.prototype.brushstart=function(t,n){if(!e.event||!e.event.sourceEvent)return;e.event.sourceEvent.stopPropagation()},i.prototype.brushmove=function(t,n){if(!e.event||!e.event.sourceEvent)return;e.event.sourceEvent.stopPropagation();if(!this.allowRange()){var r=this.xScale.invert(e.mouse(n)[0]);e.select(n).call(this.brush.extent([r,r]))}},i.prototype.brushend=function(t,n){if(!e.event||!e.event.sourceEvent)return;e.event.sourceEvent.stopPropagation();if(!this.allowRange()){var r=this.nearestStep(this.xScale.invert(e.mouse(n)[0]));e.select(n).call(this.brush.extent([r,r])),this.data(r),this._click()}else{var i=this.brush.extent();i[0]=this.nearestStep(i[0]),i[1]=this.nearestStep(i[1]),this.data(i),e.select(n).call(this.brush.extent(i)),this.newSelection(i[0],i[1])}},i.prototype.nearestStep=function(e){return this.low()+Math.round((e-this.low())/this.step())*this.step()},i.prototype.handlePath=function(e,t){var n=+(e==="e"),r=n?1:-1,i=this.allowRange()?.5:0,s=18,o="M"+i*r+","+s+"A6,6 0 0 "+n+" "+6.5*r+","+(s+6)+"V"+(2*s-6)+"A6,6 0 0 "+n+" "+i*r+","+2*s;return this.allowRange()?o+="ZM"+2.5*r+","+(s+8)+"V"+(2*s-8)+"M"+4.5*r+","+(s+8)+"V"+(2*s-8):o+="M"+1*r+","+(s+8)+"V"+(2*s-8),o},i.prototype._click=function(){if(this.selectionLabel()){var e={};e[this.selectionLabel()]=this.data(),this.click(e)}else this.click(this.data())},i.prototype.newSelection=function(e,t){console.log("newSelection:  "+e+", "+t)},i}),define("css!src/form/Form",[],function(){}),function(e,t){typeof define=="function"&&define.amd?define("src/form/Form",["d3","../common/HTMLWidget","../common/SVGWidget","../common/WidgetArray","./Input","./Slider","css!./Form"],t):e.form_Form=t(e.d3,e.common_HTMLWidget,e.common_SVGWidget,e.common_WidgetArray,e.form_Input,e.form_Slider)}(this,function(e,t,n,r,i,s){function o(){t.call(this),this._tag="form"}return o.prototype=Object.create(t.prototype),o.prototype.constructor=o,o.prototype._class+=" form_Form",o.prototype.publish("validate",!0,"boolean","Enable/Disable input validation"),o.prototype.publish("inputs",[],"widgetArray","Array of input widgets"),o.prototype.publish("showSubmit",!0,"boolean","Show Submit/Cancel Controls"),o.prototype.publish("omitBlank",!1,"boolean","Drop Blank Fields From Submit"),o.prototype.data=function(e){if(!arguments.length){var t=[];return this.inputsForEach(function(e){t.push(e.value())}),t}return this.inputsForEach(function(t,n){e.length>n&&t.value(e[n]).render()}),this},o.prototype.inputsForEach=function(e,t){var n=0;this.inputs().forEach(function(i){var s=i instanceof r?i.content():[i];s.forEach(function(r){t?e.call(t,r,n++):e(r,n++)})})},o.prototype.calcMaxColumns=function(){var e=0;return this.inputs().forEach(function(t){var n=t instanceof r?t.content():[t];n.length>e&&(e=n.length)}),e},o.prototype.values=function(){var e={};return this.inputsForEach(function(t){var n=t.value();if(n||!this.omitBlank())e[t.name()]=t.value()},this),e},o.prototype.submit=function(){var e=!0;this.validate()&&(e=this.checkValidation()),this.click(e?this.values():null)},o.prototype.clear=function(){this.inputsForEach(function(e){e instanceof s?e.allowRange()?e.value([e.low(),e.low()]).render():e.value(e.low()).render():e.type()==="checkbox"?e.value(!1).render():e.value("").render()})},o.prototype.checkValidation=function(){var e=!0,t=[];return this.inputsForEach(function(e){e.isValid()||t.push("'"+e.label()+"'"+" value is invalid.")}),t.length>0&&(alert(t.join("\n")),e=!1),e},o.prototype.enter=function(n,r){t.prototype.enter.apply(this,arguments),r.on("submit",function(){e.event.preventDefault()}),this._parentElement.style("overflow","auto");var s=r.append("table");this.tbody=s.append("tbody"),this.tfoot=s.append("tfoot"),this.btntd=this.tfoot.append("tr").append("td").attr("colspan",2);var o=this;this._controls=[(new i).type("button").value("Submit").on("click",function(){o.submit()},!0),(new i).type("button").value("Clear").on("click",function(){o.clear()},!0)];var u=o.btntd.append("div").style("float","right");this._controls.forEach(function(e){var t=u.append("span").style("float","left");e.target(t.node()).render()})},o.prototype.update=function(i,s){t.prototype.update.apply(this,arguments),this._maxCols=this.calcMaxColumns();var o=this,u=this.tbody.selectAll("tr").data(this.inputs());u.enter().append("tr").each(function(t,i){var s=e.select(this),u=t instanceof r?t.content():[t];u.forEach(function(e,t){s.append("td").attr("class","prompt").text(e.label()+":");var r=s.append("td").attr("class","input");t===u.length-1&&u.length<o._maxCols&&r.attr("colspan",(o._maxCols-u.length+1)*2),e.target(r.node()).render();if(e instanceof n){var i=e.element().node().getBBox();r.style("height",i.height+"px"),e.resize().render()}})}),u.exit().remove(),this.tfoot.style("display",this.showSubmit()?"table-footer-group":"none"),this.btntd.attr("colspan",this._maxCols*2)},o.prototype.exit=function(e,n){this.inputs_reset(),this._controls.forEach(function(e){e.target(null)}),t.prototype.exit.apply(this,arguments)},o.prototype.click=function(e){console.log("Clicked Submit: "+JSON.stringify(e))},o}),function(e){var t=document,n="appendChild",r="styleSheet",i=t.createElement("style");i.type="text/css",t.getElementsByTagName("head")[0][n](i),i[r]?i[r].cssText=e:i[n](t.createTextNode(e))}('.form_Input input,.form_Input select,.form_Input button,.form_Input textarea{padding:2px}.form_Input button{cursor:pointer}.form_Input input.color-text{width:120px}.form_Input input.color-text+input{width:57px;position:absolute}.form_Input textarea,.form_Input input[type="textbox"]{width:100%;box-sizing:border-box;display:block}.form_Input ul{list-style-type:none;float:left;padding:0;margin:0}.form_Input li{float:left;list-style-position:inside}.form_Slider text{color:#000}.form_Slider .axis{-webkit-user-select:none;-moz-user-select:none;user-select:none}.form_Slider .axis .domain{stroke:lightgray;stroke-width:10px;stroke-linecap:round}.form_Slider .axis .halo{fill:none;stroke:#ddd;stroke-width:8px;stroke-linecap:round}.form_Slider .extent{fill:#fff;opacity:.5}.form_Slider .handle{fill:#fff;stroke:#bbb;stroke-opacity:.5;stroke-width:1px;pointer-events:none}.form_Slider .common_Icon .common_Widget .common_Shape{fill:#ccc;stroke:#bbb}.form_Slider .common_Icon:hover{cursor:pointer}.form_Slider .common_Icon:hover .common_Widget .common_Shape{stroke:#aaa}.form_Form{color:#404040}.form_Form tbody td{white-space:nowrap;border:1px solid #E5E5E5}.form_Form td.prompt{padding:5px;vertical-align:top;background-color:#E5E5E5}.form_Form td.input{padding:5px;width:100%;vertical-align:middle}.form_Form tfoot button{margin:5px}.form_Form tbody tr:hover{background-color:#FAFAFA}'),define("hpcc-viz-form",function(){});