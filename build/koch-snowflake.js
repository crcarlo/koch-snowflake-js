!function(){function a(){return"qs_"+ ++i}function b(a,b){var c=d("div",null,"qs_label",b);return c.innerHTML=a,c}function c(a,b,c,e){var f=d("input",b,c,e);return f.type=a,f}function d(a,b,c,d){var e=document.createElement(a);if(e)return e.id=b,c&&(e.className=c),d&&d.appendChild(e),e}function e(){return-1!=navigator.userAgent.indexOf("rv:11")||-1!=navigator.userAgent.indexOf("MSIE")}function f(){var a=navigator.userAgent.toLowerCase();return!(a.indexOf("chrome")>-1||a.indexOf("firefox")>-1||a.indexOf("epiphany")>-1)&&a.indexOf("safari/")>-1}function g(){return navigator.userAgent.toLowerCase().indexOf("edge")>-1}function h(){var a=document.createElement("style");a.innerText=k,document.head.appendChild(a),j=!0}var i=0,j=!1,k=".qs_main{background-color:#dddddd;text-align:left;position:absolute;width:200px;font:12px sans-serif;box-shadow:5px 5px 8px rgba(0,0,0,0.35);user-select:none;-webkit-user-select:none;color:#000000;border:none}.qs_content{background-color:#cccccc;overflow-y:auto}.qs_title_bar{background-color:#eeeeee;user-select:none;-webkit-user-select:none;cursor:pointer;padding:5px;font-weight:bold;border:none;color:#000000}.qs_container{margin:5px;padding:5px;background-color:#eeeeee;border:none;position:relative}.qs_container_selected{border:none;background-color:#ffffff}.qs_range{-webkit-appearance:none;-moz-appearance:none;width:100%;height:17px;padding:0;margin:0;background-color:transparent;border:none;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.qs_range:focus{outline:none;border:none}.qs_range::-webkit-slider-runnable-track{width:100%;height:15px;cursor:pointer;background:#cccccc;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0}.qs_range:focus::-webkit-slider-runnable-track{background:#cccccc}.qs_range::-webkit-slider-thumb{-webkit-appearance:none;height:15px;width:15px;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0;background:#999999;cursor:pointer;margin-top:0}.qs_range::-moz-range-track{width:100%;height:15px;cursor:pointer;background:#cccccc;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0}.qs_range::-moz-range-thumb{height:15px;width:15px;border:none;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0;background:#999999;cursor:pointer}.qs_range::-ms-track{width:100%;height:15px;cursor:pointer;visibility:hidden;background:transparent}.qs_range::-ms-thumb{height:15px;width:15px;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0;background:#999999;cursor:pointer;border:none}.qs_range::-ms-fill-lower{background:#cccccc;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0}.qs_range:focus::-ms-fill-lower{background:#cccccc}.qs_range::-ms-fill-upper{background:#cccccc;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0}.qs_range:focus::-ms-fill-upper{background:#cccccc}.qs_button{background-color:#f6f6f6;color:#000000;height:30px;border:1px solid #aaaaaa;font:12px sans-serif}.qs_button:active{background-color:#ffffff;border:1px solid #aaaaaa}.qs_button:focus{border:1px solid #aaaaaa;outline:none}.qs_checkbox{cursor:pointer;display:inline}.qs_checkbox input{position:absolute;left:-99999px}.qs_checkbox span{height:16px;width:100%;display:block;text-indent:20px;background:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAALklEQVQ4T2OcOXPmfwYKACPIgLS0NLKMmDVrFsOoAaNhMJoOGBioFwZkZUWoJgApdFaxjUM1YwAAAABJRU5ErkJggg==') no-repeat}.qs_checkbox input:checked+span{background:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAvElEQVQ4T63Tyw2EIBAA0OFKBxBL40wDRovAUACcKc1IB1zZDAkG18GYZTmSmafzgTnnMgwchoDWGlJKheGcP3JtnPceCqCUAmttSZznuYtgchsXQrgC+77DNE0kUpPbmBOoJaBOIVQylnqWgAAeKhDve/AN+EaklJBzhhgjWRoJVGTbNjiOowAIret6a+4jYIwpX8aDwLIs74C2D0IIYIyVP6Gm898m9kbVm85ljHUTf16k4VUefkwDrxk+zoUEwCt0GbUAAAAASUVORK5CYII=') no-repeat}.qs_checkbox_label{position:absolute;top:7px;left:30px}.qs_label{margin-bottom:3px;user-select:none;-webkit-user-select:none;cursor:default;font:12px sans-serif}.qs_text_input{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;width:100%;padding:0 0 0 5px;height:24px;border:1px inset #ffffff;background-color:#ffffff;color:#000000;font-size:12px}.qs_text_input:focus{outline:none;background:#ffffff;border:1px inset #ffffff}.qs_select{background:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAp0lEQVRIS+2SsQ3FIAwF7RVYhA5mgQFhFuhYhJKWL0eKxI8SGylKZ0p4+OBsHGNM+HChAiS7qkgyBKrovaLeOxhjbgtxZ+cFtgelFMg5QwgBvPd/EO5sDbKAlBLUWo/8CjmL075zDmKMj6rEKbpCqBL9aqc4ZUQAhVbInBMQUXz5Vg/WfxOktXZsWWtZLds9uIqlqaH1NFV3jdhSJA47E1CAaE8ViYp+wGiWMZ/T+cgAAAAASUVORK5CYII=') no-repeat right #f6f6f6;-webkit-appearance:none;-moz-appearance:none;appearance:none;color:#000000;width:100%;height:24px;border:1px solid #aaaaaa;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0;padding:0 5px;-moz-outline:none;font-size:14px}.qs_select option{font-size:14px}.qs_select::-ms-expand{display:none}.qs_select:focus{outline:none}.qs_number{height:24px}.qs_image{width:100%}.qs_progress{width:100%;height:15px;background-color:#cccccc;border:none;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.qs_progress_value{height:100%;background-color:#999999}.qs_textarea{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;resize:vertical;width:100%;padding:3px 5px;border:1px inset #ffffff;background-color:#ffffff;color:#000000;font-size:12px}.qs_textarea:focus{outline:none;background:#ffffff;border:1px inset #ffffff}.qs_color{position:absolute;left:-999999px}.qs_color_label{width:100%;height:20px;display:block;border:1px solid #aaaaaa;cursor:pointer;padding:0 0 0 5px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.qs_file_chooser{position:absolute;left:-999999px}.qs_file_chooser_label{background-color:#f6f6f6;color:#000000;height:30px;border:1px solid #aaaaaa;font:12px sans-serif;width:100%;display:block;cursor:pointer;padding:7px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}",l={_version:"3.0.2",_topZ:1,_panel:null,_titleBar:null,_content:null,_startX:0,_startY:0,_hidden:!1,_collapsed:!1,_controls:null,_keyCode:-1,_draggable:!0,_collapsible:!0,_globalChangeHandler:null,useExtStyleSheet:function(){j=!0},create:function(a,b,c,d){var e=Object.create(this);return e._init(a,b,c,d),e},destroy:function(){this._panel.parentElement&&this._panel.parentElement.removeChild(this._panel);for(var a in this)this[a]=null},_init:function(a,b,c,d){j||h(),this._bindHandlers(),this._createPanel(a,b,d),this._createTitleBar(c||"QuickSettings"),this._createContent()},_bindHandlers:function(){this._startDrag=this._startDrag.bind(this),this._drag=this._drag.bind(this),this._endDrag=this._endDrag.bind(this),this._doubleClickTitle=this._doubleClickTitle.bind(this),this._onKeyUp=this._onKeyUp.bind(this)},getValuesAsJSON:function(a){var b={};for(var c in this._controls)this._controls[c].getValue&&(b[c]=this._controls[c].getValue());return a&&(b=JSON.stringify(b)),b},setValuesFromJSON:function(a){"string"==typeof a&&(a=JSON.parse(a));for(var b in a)this._controls[b]&&this._controls[b].setValue&&this._controls[b].setValue(a[b]);return this},saveInLocalStorage:function(a){return this._localStorageName=a,this._readFromLocalStorage(a),this},clearLocalStorage:function(a){return localStorage.removeItem(a),this},_saveInLocalStorage:function(a){localStorage.setItem(a,this.getValuesAsJSON(!0))},_readFromLocalStorage:function(a){var b=localStorage.getItem(a);b&&this.setValuesFromJSON(b)},_createPanel:function(a,b,c){this._panel=d("div",null,"qs_main",c||document.body),this._panel.style.zIndex=++l._topZ,this.setPosition(a||0,b||0),this._controls={}},_createTitleBar:function(a){this._titleBar=d("div",null,"qs_title_bar",this._panel),this._titleBar.textContent=a,this._titleBar.addEventListener("mousedown",this._startDrag),this._titleBar.addEventListener("dblclick",this._doubleClickTitle)},_createContent:function(){this._content=d("div",null,"qs_content",this._panel)},_createContainer:function(){var a=d("div",null,"qs_container");return a.addEventListener("focus",function(){this.className+=" qs_container_selected"},!0),a.addEventListener("blur",function(){var a=this.className.indexOf(" qs_container_selected");a>-1&&(this.className=this.className.substr(0,a))},!0),this._content.appendChild(a),a},setPosition:function(a,b){return this._panel.style.left=a+"px",this._panel.style.top=Math.max(b,0)+"px",this},setSize:function(a,b){return this._panel.style.width=a+"px",this._content.style.width=a+"px",this._content.style.height=b-this._titleBar.offsetHeight+"px",this},setWidth:function(a){return this._panel.style.width=a+"px",this._content.style.width=a+"px",this},setHeight:function(a){return this._content.style.height=a-this._titleBar.offsetHeight+"px",this},setDraggable:function(a){return this._draggable=a,this._draggable||this._collapsible?this._titleBar.style.cursor="pointer":this._titleBar.style.cursor="default",this},_startDrag:function(a){this._draggable&&(this._panel.style.zIndex=++l._topZ,document.addEventListener("mousemove",this._drag),document.addEventListener("mouseup",this._endDrag),this._startX=a.clientX,this._startY=a.clientY),a.preventDefault()},_drag:function(a){var b=parseInt(this._panel.style.left),c=parseInt(this._panel.style.top),d=a.clientX,e=a.clientY;this.setPosition(b+d-this._startX,c+e-this._startY),this._startX=d,this._startY=e,a.preventDefault()},_endDrag:function(a){document.removeEventListener("mousemove",this._drag),document.removeEventListener("mouseup",this._endDrag),a.preventDefault()},setGlobalChangeHandler:function(a){return this._globalChangeHandler=a,this},_callGCH:function(a){this._localStorageName&&this._saveInLocalStorage(this._localStorageName),this._globalChangeHandler&&this._globalChangeHandler(a)},hide:function(){return this._panel.style.visibility="hidden",this._hidden=!0,this},show:function(){return this._panel.style.visibility="visible",this._panel.style.zIndex=++l._topZ,this._hidden=!1,this},toggleVisibility:function(){return this._hidden?this.show():this.hide(),this},setCollapsible:function(a){return this._collapsible=a,this._draggable||this._collapsible?this._titleBar.style.cursor="pointer":this._titleBar.style.cursor="default",this},collapse:function(){return this._panel.removeChild(this._content),this._collapsed=!0,this},expand:function(){return this._panel.appendChild(this._content),this._collapsed=!1,this},toggleCollapsed:function(){return this._collapsed?this.expand():this.collapse(),this},setKey:function(a){return this._keyCode=a.toUpperCase().charCodeAt(0),document.addEventListener("keyup",this._onKeyUp),this},_onKeyUp:function(a){a.keyCode===this._keyCode&&["INPUT","SELECT","TEXTAREA"].indexOf(a.target.tagName)<0&&this.toggleVisibility()},_doubleClickTitle:function(){this._collapsible&&this.toggleCollapsed()},removeControl:function(a){if(this._controls[a])var b=this._controls[a].container;return b&&b.parentElement&&b.parentElement.removeChild(b),this._controls[a]=null,this},enableControl:function(a){return this._controls[a]&&(this._controls[a].control.disabled=!1),this},disableControl:function(a){return this._controls[a]&&(this._controls[a].control.disabled=!0),this},hideControl:function(a){return this._controls[a]&&(this._controls[a].container.style.display="none"),this},showControl:function(a){return this._controls[a]&&(this._controls[a].container.style.display="block"),this},overrideStyle:function(a,b,c){return this._controls[a]&&(this._controls[a].control.style[b]=c),this},hideTitle:function(a){var b=this._controls[a].label;return b&&(b.style.display="none"),this},showTitle:function(a){var b=this._controls[a].label;return b&&(b.style.display="block"),this},hideAllTitles:function(){for(var a in this._controls){var b=this._controls[a].label;b&&(b.style.display="none")}return this},showAllTitles:function(){for(var a in this._controls){var b=this._controls[a].label;b&&(b.style.display="block")}return this},getValue:function(a){return this._controls[a].getValue()},setValue:function(a,b){return this._controls[a].setValue(b),this._callGCH(a),this},addBoolean:function(b,e,f){var g=this._createContainer(),h=a(),i=d("label",null,"qs_checkbox_label",g);i.textContent=b,i.setAttribute("for",h);var j=d("label",null,"qs_checkbox",g);j.setAttribute("for",h);var k=c("checkbox",h,null,j);k.checked=e;d("span",null,null,j);this._controls[b]={container:g,control:k,getValue:function(){return this.control.checked},setValue:function(a){this.control.checked=a,f&&f(a)}};var l=this;return k.addEventListener("change",function(){f&&f(k.checked),l._callGCH(b)}),this},bindBoolean:function(a,b,c){return this.addBoolean(a,b,function(b){c[a]=b})},addButton:function(b,d){var e=this._createContainer(),f=c("button",a(),"qs_button",e);f.value=b,this._controls[b]={container:e,control:f};var g=this;return f.addEventListener("click",function(){d&&d(f),g._callGCH(b)}),this},addColor:function(h,i,j){if(f()||g()||e())return this.addText(h,i,j);var k=this._createContainer(),l=b("<b>"+h+":</b> "+i,k),m=a(),n=c("color",m,"qs_color",k);n.value=i||"#ff0000";var o=d("label",null,"qs_color_label",k);o.setAttribute("for",m),o.style.backgroundColor=n.value,this._controls[h]={container:k,control:n,colorLabel:o,label:l,title:h,getValue:function(){return this.control.value},setValue:function(a){this.control.value=a,this.colorLabel.style.backgroundColor=n.value,this.label.innerHTML="<b>"+this.title+":</b> "+this.control.value,j&&j(a)}};var p=this;return n.addEventListener("input",function(){l.innerHTML="<b>"+h+":</b> "+n.value,o.style.backgroundColor=n.value,j&&j(n.value),p._callGCH(h)}),this},bindColor:function(a,b,c){return this.addColor(a,b,function(b){c[a]=b})},addDate:function(d,f,g){function h(a){if(a instanceof Date){var b=a.getFullYear(),c=a.getMonth()+1;c<10&&(c="0"+c);var d=a.getDate();return d<10&&(d="0"+d),b+"-"+c+"-"+d}return a}var i=h(f);if(e())return this.addText(d,i,g);var j=this._createContainer(),k=b("<b>"+d+"</b>",j),l=c("date",a(),"qs_text_input",j);l.value=i||"",this._controls[d]={container:j,control:l,label:k,getValue:function(){return this.control.value},setValue:function(a){var b=h(a);this.control.value=b||"",g&&g(b)}};var m=this;return l.addEventListener("input",function(){g&&g(l.value),m._callGCH(d)}),this},bindDate:function(a,b,c){return this.addDate(a,b,function(b){c[a]=b})},addDropDown:function(a,c,e){for(var f=this._createContainer(),g=b("<b>"+a+"</b>",f),h=d("select",null,"qs_select",f),i=0;i<c.length;i++){var j=d("option"),k=c[i];k.label?(j.value=k.value,j.innerText=k.label):(j.label=k,j.innerText=k),h.add(j)}var l=this;return h.addEventListener("change",function(){var b=h.selectedIndex,d=h.options;e&&e({index:b,label:d[b].label,value:c[b].value||c[b]}),l._callGCH(a)}),this._controls[a]={container:f,control:h,label:g,getValue:function(){var a=this.control.selectedIndex;return{index:a,label:this.control.options[a].label,value:c[a].value||c[a]}},setValue:function(a){var b;b=null!=a.index?a.index:a;var d=this.control.options;this.control.selectedIndex=b,e&&e({index:b,label:d[b].label,value:c[b].value||c[b]})}},this},bindDropDown:function(a,b,c){return this.addDropDown(a,b,function(b){c[a]=b.value})},addElement:function(a,c){var d=this._createContainer(),e=b("<b>"+a+"</b>",d);return d.appendChild(c),this._controls[a]={container:d,label:e},this},addFileChooser:function(e,f,g,h){var i=this._createContainer(),j=b("<b>"+e+"</b>",i),k=a(),l=c("file",k,"qs_file_chooser",i);g&&(l.accept=g);var m=d("label",null,"qs_file_chooser_label",i);m.setAttribute("for",k),m.textContent=f||"Choose a file...",this._controls[e]={container:i,control:l,label:j,getValue:function(){return this.control.files[0]}};var n=this;return l.addEventListener("change",function(){l.files&&l.files.length&&(m.textContent=l.files[0].name,h&&h(l.files[0]),n._callGCH(e))}),this},addHTML:function(a,c){var e=this._createContainer(),f=b("<b>"+a+":</b> ",e),g=d("div",null,null,e);return g.innerHTML=c,this._controls[a]={container:e,label:f,control:g,getValue:function(){return this.control.innerHTML},setValue:function(a){this.control.innerHTML=a}},this},addImage:function(a,c,e){var f=this._createContainer(),g=b("<b>"+a+"</b>",f);return img=d("img",null,"qs_image",f),img.src=c,this._controls[a]={container:f,control:img,label:g,getValue:function(){return this.control.src},setValue:function(a){this.control.src=a,e&&img.addEventListener("load",function b(){img.removeEventListener("load",b),e(a)})}},this},addRange:function(a,b,c,d,e,f){return this._addNumber("range",a,b,c,d,e,f)},addNumber:function(a,b,c,d,e,f){return this._addNumber("number",a,b,c,d,e,f)},_addNumber:function(d,f,g,h,i,j,k){var l=this._createContainer(),m=b("",l),n="range"===d?"qs_range":"qs_text_input qs_number",o=c(d,a(),n,l);o.min=g||0,o.max=h||100,o.step=j||1,o.value=i||0,m.innerHTML="<b>"+f+":</b> "+o.value,this._controls[f]={container:l,control:o,label:m,title:f,callback:k,getValue:function(){return parseFloat(this.control.value)},setValue:function(a){this.control.value=a,this.label.innerHTML="<b>"+this.title+":</b> "+this.control.value,k&&k(parseFloat(a))}};var p="input";"range"===d&&e()&&(p="change");var q=this;return o.addEventListener(p,function(){m.innerHTML="<b>"+f+":</b> "+o.value,k&&k(parseFloat(o.value)),q._callGCH(f)}),this},bindRange:function(a,b,c,d,e,f){return this.addRange(a,b,c,d,e,function(b){f[a]=b})},bindNumber:function(a,b,c,d,e,f){return this.addNumber(a,b,c,d,e,function(b){f[a]=b})},setRangeParameters:function(a,b,c,d){return this.setNumberParameters(a,b,c,d)},setNumberParameters:function(a,b,c,d){var e=this._controls[a],f=e.control.value;return e.control.min=b,e.control.max=c,e.control.step=d,e.control.value!==f&&e.callback&&e.callback(e.control.value),this},addPassword:function(a,b,c){return this._addText("password",a,b,c)},bindPassword:function(a,b,c){return this.addPassword(a,b,function(b){c[a]=b})},addProgressBar:function(a,c,e,f){var g=this._createContainer(),h=b("",g),i=d("div",null,"qs_progress",g),j=d("div",null,"qs_progress_value",i);return j.style.width=e/c*100+"%",h.innerHTML="numbers"===f?"<b>"+a+":</b> "+e+" / "+c:"percent"===f?"<b>"+a+":</b> "+Math.round(e/c*100)+"%":"<b>"+a+"</b>",this._controls[a]={container:g,control:i,valueDiv:j,valueDisplay:f,label:h,value:e,max:c,title:a,getValue:function(){return this.value},setValue:function(a){this.value=Math.max(0,Math.min(a,this.max)),this.valueDiv.style.width=this.value/this.max*100+"%","numbers"===this.valueDisplay?this.label.innerHTML="<b>"+this.title+":</b> "+this.value+" / "+this.max:"percent"===this.valueDisplay&&(this.label.innerHTML="<b>"+this.title+":</b> "+Math.round(this.value/this.max*100)+"%")}},this},setProgressMax:function(a,b){var c=this._controls[a];return c.max=b,c.value=Math.min(c.value,c.max),c.valueDiv.style.width=c.value/c.max*100+"%","numbers"===c.valueDisplay?c.label.innerHTML="<b>"+c.title+":</b> "+c.value+" / "+c.max:"percent"===c.valueDisplay?c.label.innerHTML="<b>"+c.title+":</b> "+Math.round(c.value/c.max*100)+"%":c.label.innerHTML="<b>"+c.title+"</b>",this},addText:function(a,b,c){return this._addText("text",a,b,c)},_addText:function(e,f,g,h){var i,j=this._createContainer(),k=b("<b>"+f+"</b>",j);"textarea"===e?(i=d("textarea",a(),"qs_textarea",j),i.rows=5):i=c(e,a(),"qs_text_input",j),i.value=g||"",this._controls[f]={container:j,control:i,label:k,getValue:function(){return this.control.value},setValue:function(a){this.control.value=a,h&&h(a)}};var l=this;return i.addEventListener("input",function(){h&&h(i.value),l._callGCH(f)}),this},bindText:function(a,b,c){return this.addText(a,b,function(b){c[a]=b})},addTextArea:function(a,b,c){return this._addText("textarea",a,b,c)},setTextAreaRows:function(a,b){return this._controls[a].control.rows=b,this},bindTextArea:function(a,b,c){return this.addTextArea(a,b,function(b){c[a]=b})},addTime:function(d,f,g){var h;if(f instanceof Date){var i=f.getHours();i<10&&(i="0"+i);var j=f.getMinutes();j<10&&(j="0"+j);var k=f.getSeconds();k<10&&(k="0"+k),h=i+":"+j+":"+k}else h=f;if(e())return this.addText(d,h,g);var l=this._createContainer(),m=b("<b>"+d+"</b>",l),n=c("time",a(),"qs_text_input",l);n.value=h||"",this._controls[d]={container:l,control:n,label:m,getValue:function(){return this.control.value},setValue:function(a){var b;if(a instanceof Date){var c=a.getHours();c<10&&(c="0"+c);var d=a.getMinutes();d<10&&(d="0"+d);var e=a.getSeconds();e<10&&(e="0"+e),b=c+":"+d+":"+e}else b=a;this.control.value=b||"",g&&g(b)}};var o=this;return n.addEventListener("input",function(){g&&g(n.value),o._callGCH(d)}),this},bindTime:function(a,b,c){return this.addTime(a,b,function(b){c[a]=b})}};"object"==typeof exports&&"object"==typeof module?module.exports=l:"function"==typeof define&&define.amd?define(l):window.QuickSettings=l}();
/*
Author: Carlo Cervellin
About QuickSettings: https://github.com/bit101/quicksettings
*/

//canvas initialization
var canvas = document.getElementById("koch-snowflake-canvas"),
	context = canvas.getContext("2d");

// canvas variables
var canvas_top = canvas.getBoundingClientRect().top;

var backgroundColor = "#f2f2f2";
var lineColor = "#1abc9c";
document.body.style.backgroundColor = backgroundColor;

var body = document.getElementsByTagName("body")[0];
var width = body.clientWidth - 20,
	height = body.clientHeight - 20;
canvas.setAttribute("width", width - 10);
canvas.setAttribute("height", height);

//quicksetting panels
var panel = QuickSettings.create(10, 10 + canvas_top, "Paramethers", null)
	.addRange("Polygon Edges", 3, 12, 3, 1, update)
	.addRange("Iterations", 0, 6, 0, 1, update)
	.addRange("Spike Elevation", -4, 4, 1, 0.01, update)
	.addRange("Spike Base Width", -3, 3, 1, 0.01, update)
	.addRange("Spike Rotation", -180, 180, 0, 1, update)
	.addRange("Rotation", -180, 180, 0, 1, update)
	.addRange("ShiftX", -300, 300, 0, 1, update)
	.addRange("ShiftY", -300, 300, 0, 1, update)
	.addRange("Zoom", 0, 2, 1, 0.01, update)
	.addRange("Edge Thickness", 0, 10, 1, 0.1, draw)
	.addRange("Dot Thickness", 0, 10, 0, 0.1, draw)
	.addButton("Info", toggleInfoPanel)
	.addButton("Color", toggleColorPanel);

var infoPanel = QuickSettings.create(
	10 + 200 + 10,
	10 + canvas_top,
	"Info",
	null
)
	.addHTML(
		"ABOUT THIS",
		'This script is made for playing around with the Koch curve. You can find more informations about it <a href="https://en.wikipedia.org/wiki/Koch_snowflake" target="_blank">here</a>.'
	)
	.addHTML("AUTHOR", "Carlo Cervellin")
	.addHTML(
		"WARNING",
		"A high number of interations might slow your browser down depending on your processor speed and dedicated power for JavaScript engine."
	);
toggleInfoPanel();

var colorPanel = QuickSettings.create(
	width / 2 - 100,
	height / 3 + canvas_top,
	"Color",
	null
)
	.addColor("Background Color", backgroundColor, changeBackgroundColor)
	.addColor("Line Color", lineColor, changeLineColor)
	.addButton("Close", toggleColorPanel);
toggleColorPanel();

function changeBackgroundColor() {
	document.body.style.backgroundColor = colorPanel.getValue("Background Color");
}
function changeLineColor() {
	lineColor = colorPanel.getValue("Line Color");
	draw();
}

function toggleInfoPanel() {
	infoPanel.toggleVisibility();
}

function toggleColorPanel() {
	colorPanel.toggleVisibility();
}

//global variables
var centerX = width * 4 / 7,
	centerY = height / 2;

var centerDX = 0;
var centerDY = 0;
var edge = width / 6;
var edgeScale = 1;
var globalRotation = 0;

var elevation;
var spikeBaseWidth;
var rotation;

var edgeThickness = 1;

var points = [];

update();

function update() {
	elevation = panel.getValue("Spike Elevation");
	spikeBaseWidth = panel.getValue("Spike Base Width");
	rotation = panel.getValue("Spike Rotation");
	var it = panel.getValue("Iterations");
	centerDX = panel.getValue("ShiftX");
	centerDY = panel.getValue("ShiftY");
	edgeScale = panel.getValue("Zoom");
	globalRotation = panel.getValue("Rotation");
	initialize(panel.getValue("Polygon Edges"));
	for (var i = 0; i < it; i++) {
		iterationCicle();
	}
	draw();
}

function initialize(vert) {
	_edge = edge * edgeScale;
	alpha = 2 * Math.PI / vert;
	rot = globalRotation * Math.PI / 180;
	xc = centerX + centerDX;
	yc = centerY + centerDY;
	_points = [];
	for (var i = 0; i < vert; i++) {
		_points.push({
			x: xc + Math.cos(i * alpha + rot) * _edge,
			y: yc + Math.sin(i * alpha + rot) * _edge
		});
	}
	_points.push(_points[0]);
	points = _points;
}

function iterationCicle() {
	var iter = points.length - 2;
	for (var j = iter; j >= 0; j--) {
		singleIteration(j);
	}
}

function singleIteration(index) {
	var l =
		Math.sqrt(
			(points[index + 1].x - points[index].x) *
				(points[index + 1].x - points[index].x) +
				(points[index + 1].y - points[index].y) *
					(points[index + 1].y - points[index].y)
		) / 3;
	//divide in 3
	var dx = (points[index + 1].x - points[index].x) * (3 - spikeBaseWidth) / 6;
	var dy = (points[index + 1].y - points[index].y) * (3 - spikeBaseWidth) / 6;
	var mid1 = {
		x: points[index].x + dx,
		y: points[index].y + dy
	};
	var mid2 = {
		x: points[index + 1].x - dx,
		y: points[index + 1].y - dy
	};
	points.splice(index + 1, 0, mid2);
	points.splice(index + 1, 0, mid1);
	//divide central in half
	var cen1 = points[index + 1];
	var cen2 = points[index + 2];
	var mid = {
		x: (cen1.x + cen2.x) / 2,
		y: (cen1.y + cen2.y) / 2
	};
	//shift central point
	var l = l * elevation * Math.sqrt(3) / 2;
	var a = Math.atan((cen2.y - cen1.y) / (cen2.x - cen1.x));
	var angle = a + Math.PI / 2 + rotation * Math.PI / 180;
	var mid_s = {
		x: mid.x - Math.cos(angle) * l,
		y: mid.y - Math.sin(angle) * l
	};
	if (cen2.x < cen1.x)
		mid_s = {
			x: mid.x + Math.cos(angle) * l,
			y: mid.y + Math.sin(angle) * l
		};
	points.splice(index + 2, 0, mid_s);
}

/**
 * Draws 'points' list as segments
 * vertexDot (boolean) => draw dots on vertex or not
 */
function draw() {
	edgeThickness = panel.getValue("Edge Thickness");
	dotThickness = panel.getValue("Dot Thickness");
	context.clearRect(0, 0, width, height);
	context.strokeStyle = lineColor;
	context.fillStyle = lineColor;
	context.lineWidth = edgeThickness;
	for (var i = 0; i < points.length - 1; i++) {
		if (edgeThickness > 0) {
			context.beginPath();
			context.moveTo(points[i].x, points[i].y);
			context.lineTo(points[i + 1].x, points[i + 1].y);
			context.stroke();
		}
	}
	for (var i = 0; i < points.length - 1; i++) {
		if (dotThickness > 0) {
			if (i === 0) {
				context.beginPath();
				context.arc(points[i].x, points[i].y, dotThickness, 0, Math.PI * 2, true);
				context.fill();
			}
			context.beginPath();
			context.arc(points[i + 1].x, points[i + 1].y, dotThickness, 0, Math.PI * 2, true);
			context.fill();
		}
	}
}
