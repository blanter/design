// Mobile Safelink
var uri=window.location.toString();if(uri.indexOf("%3D","%3D")>0&&(window.location=uri.replace(/%3D/,"=")),(uri=window.location.toString()).indexOf("%3D%3D","%3D%3D")>0&&(window.location=uri.replace(/%3D%3D/,"==")),(uri=window.location.toString()).indexOf("&m=1","&m=1")>0){var clean_uri=uri.substring(0,uri.indexOf("&m=1"));window.history.replaceState({},document.title,clean_uri)}if((uri=window.location.toString()).indexOf("?m=1","?m=1")>0){var clean_uri=uri.substring(0,uri.indexOf("?m=1"));window.history.replaceState({},document.title,clean_uri)}
// Adsense
(function() { var ad = document.createElement('script'); ad.type = 'text/javascript'; ad.async = true; ad.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'; var sc = document.getElementsByTagName('script')[0]; sc.parentNode.insertBefore(ad, sc); })();
// CSS
function loadCSS(e, t, n) { "use strict"; var i = window.document.createElement("link"); var o = t || window.document.getElementsByTagName("script")[0]; i.rel = "stylesheet"; i.href = e; i.media = "only x"; o.parentNode.insertBefore(i, o); setTimeout(function () { i.media = n || "all" }) }
loadCSS("https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css");
// Key Event
document.onkeypress=function(n){return n=n||window.event,123==n.keyCode?!1:void 0},document.onmousedown=function(n){return n=n||window.event,123==n.keyCode?!1:void 0},document.onkeydown=function(n){return n=n||window.event,123==n.keyCode?!1:void 0};
// Adsense Active
window.document.getElementById("h237").parentNode.removeChild(window.document.getElementById("h237")),function(e,t){function n(e){e&&h237.nextFunction()}var a=e.document,i=["i","s","u"];n.prototype={rand:function(e){return Math.floor(Math.random()*e)},getElementBy:function(e,t){return e?a.getElementById(e):a.getElementsByTagName(t)},getStyle:function(e){var t=a.defaultView;return t&&t.getComputedStyle?t.getComputedStyle(e,null):e.currentStyle},deferExecution:function(e){setTimeout(e,250)},insert:function(e,t){var n=a.createElement("span"),i=a.body,d=i.childNodes.length,r=i.style,s=0,o=0;if("h237"==t){var l=document.getElementById("safelink-wrapper");for(n.setAttribute("id",t),r.margin=r.padding=0,r.height="100%",l.innerHTML="<div style='font-size:15px;text-align:center;font-weight:bold;color:red;line-height:1.5'>"+teksadblock+"<br/><br/><a class='waves-effect waves-light' style='color:#fff;background:#c62828;padding:10px 15px;font-size:13px;border-radius:3px;border-bottom:2px solid #8e0000' href='JavaScript:window.location.reload()'><i style='font-size:19px;float:left;margin-right:8px' class='material-icons'>&#xE86A;</i> Reload</a></div>",d=this.rand(d);s<d;s++)1==i.childNodes[s].nodeType&&(o=Math.max(o,parseFloat(this.getStyle(i.childNodes[s]).zIndex)||0));o&&(n.style.zIndex=o+1),d++}n.innerHTML=e,i.insertBefore(n,i.childNodes[d-1])},displayMessage:function(e){var t=this;e="abisuq".charAt(t.rand(5)),t.insert("<"+e+"></"+e+">","h237"),a.addEventListener&&t.deferExecution(function(){t.getElementBy("h237").addEventListener("DOMNodeRemoved",function(){t.displayMessage()},!1)})},i:function(){for(var e="DivTopAd,ad-zone-1,ad_190x90,ads-sticky,iqadtile5,leftframeAD,tobsideAd,ad,ads,adsense".split(","),t=e.length,n="",a=this,i=0,d="abisuq".charAt(a.rand(5));i<t;i++)a.getElementBy(e[i])||(n+="<"+d+' id="'+e[i]+'"></'+d+">");a.insert(n),a.deferExecution(function(){for(i=0;i<t;i++)if(null==a.getElementBy(e[i]).offsetParent||"none"==a.getStyle(a.getElementBy(e[i])).display)return a.displayMessage("#"+e[i]+"("+i+")");a.nextFunction()})},s:function(){var n,i,d,r,s={"pagead2.googlesyndic":"google_ad_client","js.adscale.de/getads":"adscale_slot_id","get.mirando.de/miran":"adPlaceId"},o=this,l=o.getElementBy(0,"script"),c=l.length-1;for(a.write=null,a.writeln=null;0<=c;--c)if(n=l[c].src.substr(7,20),s[n]!==t)return d=a.createElement("script"),d.type="text/javascript",d.src=l[c].src,i=s[n],e[i]=t,d.onload=d.onreadystatechange=function(){r=this,e[i]!==t||r.readyState&&"loaded"!==r.readyState&&"complete"!==r.readyState||(e[i]=d.onload=d.onreadystatechange=null,l[0].parentNode.removeChild(d))},l[0].parentNode.insertBefore(d,l[0]),void o.deferExecution(function(){if(e[i]===t)return o.displayMessage(d.src);o.nextFunction()});o.nextFunction()},u:function(){""!=converter_result.length&&(""==pass?hitung_mundur():converter_result.innerHTML='<div id="kotakpassword"><div class="input-field"><input type="password" required="required" name="pass" class="pass" value=""/><span class="highlight"></span><span class="bar"></span><label>Enter Your Password</label><br/><button class="waves-effect waves-light" onclick="input_pass()"><i class="material-icons">&#xE898;</i> Unlock</button></div><div id="wrongpass" style="display:none">Wrong Password</div></div>');var e,n,a="ad&adv_keywords=,-page-peel/,/adchain.,/adfootright.,/adsxml/ad,/adyard300.,/impopup/ad,/loadadsparam.,/meme_ad.,_adshare.".split(","),d=this,r=d.getElementBy(0,"img");r[0]!==t&&r[0].src!==t&&(e=new Image,e.onload=function(){(n=this).onload=null,n.onerror=function(){i=null,d.displayMessage(n.src)},n.src=r[0].src+"#"+a.join("")},e.src=r[0].src),d.deferExecution(function(){d.nextFunction()})},nextFunction:function(){var e=i[0];e!==t&&(i.shift(),this[e]())}},e.h237=h237=new n,a.addEventListener?e.addEventListener("load",n,!1):e.attachEvent("onload",n)}(window);
// Homepage Safelink
function auto_safelink(){auto_safeconvert()}function auto_safeconvert(){var e=window.location.hostname;""==protected_links||protected_links.match(e)?""==protected_links&&(protected_links=e):protected_links+=", "+e;var t="",r=new Array,o=0;t=document.getElementsByTagName("a"),a_to_va=t.length,o=(r=a_to_fa()).length;for(var n=!1,a=0,c="",d=0;d<a_to_va;d++){for(n=!1,a=0;0==n&&a<o;)!(c=t[d].href).match(r[a])&&c&&c.match("http")||(n=!0),a++;if(0==n){var i=Base64.encode(c),_=Math.floor(3*Math.random()+1),h=null;"1"==_&&(h=""+article1),"2"==_&&(h=""+article2),"3"==_&&(h=""+article3),t[d].href=""+blog_url+h+"?url="+i,t[d].rel="nofollow",a_to_vb++,a_to_vc+=d+":::"+t[d].href+"\n"}}var f=document.getElementById("anonyminized"),l=document.getElementById("found_links");f&&(f.innerHTML+=a_to_vb),l&&(l.innerHTML+=a_to_va)}function a_to_fa(){new Array;return protected_links=protected_links.replace(" ",""),protected_links.split(",")}var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t,r,o,n,a,c,d,i="",_=0;for(e=Base64._utf8_encode(e);_<e.length;)n=(t=e.charCodeAt(_++))>>2,a=(3&t)<<4|(r=e.charCodeAt(_++))>>4,c=(15&r)<<2|(o=e.charCodeAt(_++))>>6,d=63&o,isNaN(r)?c=d=64:isNaN(o)&&(d=64),i=i+this._keyStr.charAt(n)+this._keyStr.charAt(a)+this._keyStr.charAt(c)+this._keyStr.charAt(d);return i},decode:function(e){var t,r,o,n,a,c,d="",i=0;for(e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");i<e.length;)t=this._keyStr.indexOf(e.charAt(i++))<<2|(n=this._keyStr.indexOf(e.charAt(i++)))>>4,r=(15&n)<<4|(a=this._keyStr.indexOf(e.charAt(i++)))>>2,o=(3&a)<<6|(c=this._keyStr.indexOf(e.charAt(i++))),d+=String.fromCharCode(t),64!=a&&(d+=String.fromCharCode(r)),64!=c&&(d+=String.fromCharCode(o));return d=Base64._utf8_decode(d)},_utf8_encode:function(e){e=e.replace(/\r\n/g,"\n");for(var t="",r=0;r<e.length;r++){var o=e.charCodeAt(r);o<128?t+=String.fromCharCode(o):o>127&&o<2048?(t+=String.fromCharCode(o>>6|192),t+=String.fromCharCode(63&o|128)):(t+=String.fromCharCode(o>>12|224),t+=String.fromCharCode(o>>6&63|128),t+=String.fromCharCode(63&o|128))}return t},_utf8_decode:function(e){for(var t="",r=0,o=c1=c2=0;r<e.length;)(o=e.charCodeAt(r))<128?(t+=String.fromCharCode(o),r++):o>191&&o<224?(c2=e.charCodeAt(r+1),t+=String.fromCharCode((31&o)<<6|63&c2),r+=2):(c2=e.charCodeAt(r+1),c3=e.charCodeAt(r+2),t+=String.fromCharCode((15&o)<<12|(63&c2)<<6|63&c3),r+=3);return t}},encode=document.getElementById("encode"),decode=document.getElementById("decode"),output=document.getElementById("output"),input=document.getElementById("input"),User_ID="",protected_links="",a_to_va=0,a_to_vb=0,a_to_vc="";
// Output
function duniablanter(){if(""!=input.value){var e=Math.floor(3*Math.random()+1),t=null;"1"==e&&(t=""+article1),"2"==e&&(t=""+article2),"3"==e&&(t=""+article3),output.value=""+blog_url+t+"?url="+Base64.encode(input.value+","+password.value)}else output.value=""}var input=document.getElementById("inputURL"),output=document.getElementById("resultLink"),password=document.getElementById("pass");input.onkeyup=duniablanter,password.onkeyup=duniablanter;
// Clipboard
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.Clipboard=e()}}(function(){var e,t,n;return function e(t,n,i){function o(a,c){if(!n[a]){if(!t[a]){var l="function"==typeof require&&require;if(!c&&l)return l(a,!0);if(r)return r(a,!0);var s=new Error("Cannot find module '"+a+"'");throw s.code="MODULE_NOT_FOUND",s}var u=n[a]={exports:{}};t[a][0].call(u.exports,function(e){var n=t[a][1][e];return o(n?n:e)},u,u.exports,e,t,n,i)}return n[a].exports}for(var r="function"==typeof require&&require,a=0;a<i.length;a++)o(i[a]);return o}({1:[function(e,t,n){function i(e,t){for(;e&&e.nodeType!==o;){if(e.matches(t))return e;e=e.parentNode}}var o=9;if(Element&&!Element.prototype.matches){var r=Element.prototype;r.matches=r.matchesSelector||r.mozMatchesSelector||r.msMatchesSelector||r.oMatchesSelector||r.webkitMatchesSelector}t.exports=i},{}],2:[function(e,t,n){function i(e,t,n,i,r){var a=o.apply(this,arguments);return e.addEventListener(n,a,r),{destroy:function(){e.removeEventListener(n,a,r)}}}function o(e,t,n,i){return function(n){n.delegateTarget=r(n.target,t),n.delegateTarget&&i.call(e,n)}}var r=e("./closest");t.exports=i},{"./closest":1}],3:[function(e,t,n){n.node=function(e){return void 0!==e&&e instanceof HTMLElement&&1===e.nodeType},n.nodeList=function(e){var t=Object.prototype.toString.call(e);return void 0!==e&&("[object NodeList]"===t||"[object HTMLCollection]"===t)&&"length"in e&&(0===e.length||n.node(e[0]))},n.string=function(e){return"string"==typeof e||e instanceof String},n.fn=function(e){var t=Object.prototype.toString.call(e);return"[object Function]"===t}},{}],4:[function(e,t,n){function i(e,t,n){if(!e&&!t&&!n)throw new Error("Missing required arguments");if(!c.string(t))throw new TypeError("Second argument must be a String");if(!c.fn(n))throw new TypeError("Third argument must be a Function");if(c.node(e))return o(e,t,n);if(c.nodeList(e))return r(e,t,n);if(c.string(e))return a(e,t,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function o(e,t,n){return e.addEventListener(t,n),{destroy:function(){e.removeEventListener(t,n)}}}function r(e,t,n){return Array.prototype.forEach.call(e,function(e){e.addEventListener(t,n)}),{destroy:function(){Array.prototype.forEach.call(e,function(e){e.removeEventListener(t,n)})}}}function a(e,t,n){return l(document.body,e,t,n)}var c=e("./is"),l=e("delegate");t.exports=i},{"./is":3,delegate:2}],5:[function(e,t,n){function i(e){var t;if("SELECT"===e.nodeName)e.focus(),t=e.value;else if("INPUT"===e.nodeName||"TEXTAREA"===e.nodeName)e.focus(),e.setSelectionRange(0,e.value.length),t=e.value;else{e.hasAttribute("contenteditable")&&e.focus();var n=window.getSelection(),i=document.createRange();i.selectNodeContents(e),n.removeAllRanges(),n.addRange(i),t=n.toString()}return t}t.exports=i},{}],6:[function(e,t,n){function i(){}i.prototype={on:function(e,t,n){var i=this.e||(this.e={});return(i[e]||(i[e]=[])).push({fn:t,ctx:n}),this},once:function(e,t,n){function i(){o.off(e,i),t.apply(n,arguments)}var o=this;return i._=t,this.on(e,i,n)},emit:function(e){var t=[].slice.call(arguments,1),n=((this.e||(this.e={}))[e]||[]).slice(),i=0,o=n.length;for(i;i<o;i++)n[i].fn.apply(n[i].ctx,t);return this},off:function(e,t){var n=this.e||(this.e={}),i=n[e],o=[];if(i&&t)for(var r=0,a=i.length;r<a;r++)i[r].fn!==t&&i[r].fn._!==t&&o.push(i[r]);return o.length?n[e]=o:delete n[e],this}},t.exports=i},{}],7:[function(t,n,i){!function(o,r){if("function"==typeof e&&e.amd)e(["module","select"],r);else if("undefined"!=typeof i)r(n,t("select"));else{var a={exports:{}};r(a,o.select),o.clipboardAction=a.exports}}(this,function(e,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=n(t),r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),c=function(){function e(t){i(this,e),this.resolveOptions(t),this.initSelection()}return a(e,[{key:"resolveOptions",value:function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=t.action,this.emitter=t.emitter,this.target=t.target,this.text=t.text,this.trigger=t.trigger,this.selectedText=""}},{key:"initSelection",value:function e(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function e(){var t=this,n="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=document.body.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[n?"right":"left"]="-9999px";var i=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.addEventListener("focus",window.scrollTo(0,i)),this.fakeElem.style.top=i+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,document.body.appendChild(this.fakeElem),this.selectedText=(0,o.default)(this.fakeElem),this.copyText()}},{key:"removeFake",value:function e(){this.fakeHandler&&(document.body.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(document.body.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function e(){this.selectedText=(0,o.default)(this.target),this.copyText()}},{key:"copyText",value:function e(){var t=void 0;try{t=document.execCommand(this.action)}catch(e){t=!1}this.handleResult(t)}},{key:"handleResult",value:function e(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function e(){this.target&&this.target.blur(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function e(){this.removeFake()}},{key:"action",set:function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=t,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function e(){return this._action}},{key:"target",set:function e(t){if(void 0!==t){if(!t||"object"!==("undefined"==typeof t?"undefined":r(t))||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function e(){return this._target}}]),e}();e.exports=c})},{select:5}],8:[function(t,n,i){!function(o,r){if("function"==typeof e&&e.amd)e(["module","./clipboard-action","tiny-emitter","good-listener"],r);else if("undefined"!=typeof i)r(n,t("./clipboard-action"),t("tiny-emitter"),t("good-listener"));else{var a={exports:{}};r(a,o.clipboardAction,o.tinyEmitter,o.goodListener),o.clipboard=a.exports}}(this,function(e,t,n,i){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e,t){var n="data-clipboard-"+e;if(t.hasAttribute(n))return t.getAttribute(n)}var s=o(t),u=o(n),f=o(i),d=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),h=function(e){function t(e,n){r(this,t);var i=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return i.resolveOptions(n),i.listenClick(e),i}return c(t,e),d(t,[{key:"resolveOptions",value:function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof t.action?t.action:this.defaultAction,this.target="function"==typeof t.target?t.target:this.defaultTarget,this.text="function"==typeof t.text?t.text:this.defaultText}},{key:"listenClick",value:function e(t){var n=this;this.listener=(0,f.default)(t,"click",function(e){return n.onClick(e)})}},{key:"onClick",value:function e(t){var n=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new s.default({action:this.action(n),target:this.target(n),text:this.text(n),trigger:n,emitter:this})}},{key:"defaultAction",value:function e(t){return l("action",t)}},{key:"defaultTarget",value:function e(t){var n=l("target",t);if(n)return document.querySelector(n)}},{key:"defaultText",value:function e(t){return l("text",t)}},{key:"destroy",value:function e(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}]),t}(u.default);e.exports=h})},{"./clipboard-action":7,"good-listener":4,"tiny-emitter":6}]},{},[8])(8)});
// Clipboard Script
var clipboard=new Clipboard(".button-link");clipboard.on("success",function(o){console.log(o),document.getElementById("btnInfo").style.display="block",document.getElementById("inputURL").value="",document.getElementById("resultLink").value=""}),clipboard.on("error",function(o){console.log(o)});var clipboard2=new Clipboard(".button-code");clipboard2.on("success",function(o){console.log(o),document.getElementById("btnInfo2").style.display="block",document.getElementById("codebox").style.display="none"}),clipboard2.on("error",function(o){console.log(o)});
function refresh(){location.reload()}
// New Waves
!function(t){"use strict";function e(t){return null!==t&&t===t.window}function n(t){return e(t)?t:9===t.nodeType&&t.defaultView}function a(t){var e,a,i={top:0,left:0},o=t&&t.ownerDocument;return e=o.documentElement,void 0!==t.getBoundingClientRect&&(i=t.getBoundingClientRect()),a=n(o),{top:i.top+a.pageYOffset-e.clientTop,left:i.left+a.pageXOffset-e.clientLeft}}function i(t){var e="";for(var n in t)t.hasOwnProperty(n)&&(e+=n+":"+t[n]+";");return e}function o(t){if(!1===d.allowEvent(t))return null;for(var e=null,n=t.target||t.srcElement;null!==n.parentElement;){if(!(n instanceof SVGElement||-1===n.className.indexOf("waves-effect"))){e=n;break}if(n.classList.contains("waves-effect")){e=n;break}n=n.parentElement}return e}function r(e){var n=o(e);null!==n&&(c.show(e,n),"ontouchstart"in t&&(n.addEventListener("touchend",c.hide,!1),n.addEventListener("touchcancel",c.hide,!1)),n.addEventListener("mouseup",c.hide,!1),n.addEventListener("mouseleave",c.hide,!1))}var s=s||{},u=document.querySelectorAll.bind(document),c={duration:620,show:function(t,e){if(2===t.button)return!1;var n=e||this,o=document.createElement("div");o.className="waves-ripple",n.appendChild(o);var r=a(n),s=t.pageY-r.top,u=t.pageX-r.left,d="scale("+n.clientWidth/100*10+")";"touches"in t&&(s=t.touches[0].pageY-r.top,u=t.touches[0].pageX-r.left),o.setAttribute("data-hold",Date.now()),o.setAttribute("data-scale",d),o.setAttribute("data-x",u),o.setAttribute("data-y",s);var l={top:s+"px",left:u+"px"};o.className=o.className+" waves-notransition",o.setAttribute("style",i(l)),o.className=o.className.replace("waves-notransition",""),l["-webkit-transform"]=d,l["-moz-transform"]=d,l["-ms-transform"]=d,l["-o-transform"]=d,l.transform=d,l.opacity="1",l["-webkit-transition-duration"]=c.duration+"ms",l["-moz-transition-duration"]=c.duration+"ms",l["-o-transition-duration"]=c.duration+"ms",l["transition-duration"]=c.duration+"ms",l["-webkit-transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",l["-moz-transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",l["-o-transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",l["transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",o.setAttribute("style",i(l))},hide:function(t){d.touchup(t);var e=this,n=(e.clientWidth,null),a=e.getElementsByClassName("waves-ripple");if(!(a.length>0))return!1;var o=(n=a[a.length-1]).getAttribute("data-x"),r=n.getAttribute("data-y"),s=n.getAttribute("data-scale"),u=350-(Date.now()-Number(n.getAttribute("data-hold")));u<0&&(u=0),setTimeout(function(){var t={top:r+"px",left:o+"px",opacity:"0","-webkit-transition-duration":c.duration+"ms","-moz-transition-duration":c.duration+"ms","-o-transition-duration":c.duration+"ms","transition-duration":c.duration+"ms","-webkit-transform":s,"-moz-transform":s,"-ms-transform":s,"-o-transform":s,transform:s};n.setAttribute("style",i(t)),setTimeout(function(){try{e.removeChild(n)}catch(t){return!1}},c.duration)},u)},wrapInput:function(t){for(var e=0;e<t.length;e++){var n=t[e];if("input"===n.tagName.toLowerCase()){var a=n.parentNode;if("i"===a.tagName.toLowerCase()&&-1!==a.className.indexOf("waves-effect"))continue;var i=document.createElement("i");i.className=n.className+" waves-input-wrapper";var o=n.getAttribute("style");o||(o=""),i.setAttribute("style",o),n.className="waves-button-input",n.removeAttribute("style"),a.replaceChild(i,n),i.appendChild(n)}}}},d={touches:0,allowEvent:function(t){var e=!0;return"touchstart"===t.type?d.touches+=1:"touchend"===t.type||"touchcancel"===t.type?setTimeout(function(){d.touches>0&&(d.touches-=1)},500):"mousedown"===t.type&&d.touches>0&&(e=!1),e},touchup:function(t){d.allowEvent(t)}};s.displayEffect=function(e){"duration"in(e=e||{})&&(c.duration=e.duration),c.wrapInput(u(".waves-effect")),"ontouchstart"in t&&document.body.addEventListener("touchstart",r,!1),document.body.addEventListener("mousedown",r,!1)},s.attach=function(e){"input"===e.tagName.toLowerCase()&&(c.wrapInput([e]),e=e.parentElement),"ontouchstart"in t&&e.addEventListener("touchstart",r,!1),e.addEventListener("mousedown",r,!1)},t.Waves=s,document.addEventListener("DOMContentLoaded",function(){s.displayEffect()},!1)}(window);
// License
var navigation=document.querySelectorAll("\x68\x65\x61\x64\x20\x6D\x65\x74\x61");-1==(navigation=(navigation=navigation[navigation.length-1]).nextElementSibling.innerHTML).indexOf("\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x69\x64\x62\x6C\x61\x6E\x74\x65\x72\x2E\x63\x6F\x6D")&&(window.location.href="\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x69\x64\x62\x6C\x61\x6E\x74\x65\x72\x2E\x63\x6F\x6D");
// Recent Post
function safefeed(e,t){for(var n=e.split("<"),r=0;r<n.length;r++)-1!=n[r].indexOf(">")&&(n[r]=n[r].substring(n[r].indexOf(">")+1,n[r].length));return n=n.join(""),n=n.substring(0,t-1)}function showrecentpostsae(e){var t,n,r,a,s="";urlprevious="",urlnext="";for(l=0;l<e.feed.link.length;l++)"previous"==e.feed.link[l].rel&&(urlprevious=e.feed.link[l].href),"next"==e.feed.link[l].rel&&(urlnext=e.feed.link[l].href);for(var i=0;i<numfeed&&i!=e.feed.entry.length;i++){n=(t=e.feed.entry[i]).title.$t;for(var l=0;l<t.link.length;l++)if("alternate"==t.link[l].rel){r=t.link[l].href;break}a="content"in t?t.content.$t:"summary"in t?t.summary.$t:"",s+="<div class='recentpostel'>",s+="<a href='"+r+"' target='_blank'><img src='"+("media$thumbnail"in t?t.media$thumbnail.url:"https://3.bp.blogspot.com/-BHuXHny1kOk/VXrkSyxKCjI/AAAAAAAACas/pZLJAEUDtds/s1600/no-image.png")+"' /></a>",s+="<h6><a href='"+r+"'>"+n+"</a></h6>",s+="<p>"+safefeed(a,charac)+"...</p>",s+="</div>"}document.getElementById("recentpostsae").innerHTML=s,s="",s+=urlprevious?"<a href='javascript:navigasifeed(-1);' class='previous'>Previous</a>":"<span class='noactived previous'>Previous</span>",s+=urlnext?"<a href='javascript:navigasifeed(1);' class='next'>Next</a>":"<span class='noactived next'>Next</span>",s+="<a href='javascript:navigasifeed(0);' class='home'>Home</a>",document.getElementById("recentpostnavfeed").innerHTML=s}function navigasifeed(e){var t,n;-1==e?(t=urlprevious.indexOf("?"),n=urlprevious.substring(t)):1==e?(t=urlnext.indexOf("?"),n=urlnext.substring(t)):n="?start-index=1&max-results="+numfeed+"&orderby=published&alt=json-in-script",incluirscript(n+="&callback=showrecentpostsae")}function incluirscript(e){1==startfeed&&removerscript(),document.getElementById("recentpostsae").innerHTML="<div id='recentpostload'></div>",document.getElementById("recentpostnavfeed").innerHTML="";var t=recent_post_url+"/feeds/posts/default"+e,n=document.createElement("script");n.setAttribute("type","text/javascript"),n.setAttribute("src",t),n.setAttribute("id","safelabel"),document.getElementsByTagName("head")[0].appendChild(n),startfeed=1}function removerscript(){var e=document.getElementById("safelabel");e.parentNode.removeChild(e)}var numfeed=8,startfeed=0,charac=70,urlprevious,urlnext;onload=function(){navigasifeed(0)};
// Special Click
$(document).ready(function(){$(".btn-safe").click(function(){input.value.length&&$("#blantersafelink,.matilampu").toggleClass("aktif")})});
// End Load
$(window).bind("load",function(){$(".adsbygoogle").toggleClass('load')});
$(document).ready(function(){$(".close-sf").click(function(){$("#blantersafelink,.matilampu,.suksescopy").removeClass("aktif")})});
$(document).ready(function(){$("#btnCopy").click(function(){$(".suksescopy").toggleClass("aktif")})});
$(document).ready(function(){$(".btn-pass").click(function(){$(".input-pass").slideToggle("fast")})});