!function(e){var t={};function a(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=6)}([function(e,t,a){"use strict";var n,o=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},r=function(){var e={};return function(t){if(void 0===e[t]){var a=document.querySelector(t);if(window.HTMLIFrameElement&&a instanceof window.HTMLIFrameElement)try{a=a.contentDocument.head}catch(e){a=null}e[t]=a}return e[t]}}(),i=[];function s(e){for(var t=-1,a=0;a<i.length;a++)if(i[a].identifier===e){t=a;break}return t}function c(e,t){for(var a={},n=[],o=0;o<e.length;o++){var r=e[o],c=t.base?r[0]+t.base:r[0],l=a[c]||0,d="".concat(c," ").concat(l);a[c]=l+1;var f=s(d),b={css:r[1],media:r[2],sourceMap:r[3]};-1!==f?(i[f].references++,i[f].updater(b)):i.push({identifier:d,updater:h(b,t),references:1}),n.push(d)}return n}function l(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var o=a.nc;o&&(n.nonce=o)}if(Object.keys(n).forEach((function(e){t.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(t);else{var i=r(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var d,f=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function b(e,t,a,n){var o=a?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=f(t,o);else{var r=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(r,i[t]):e.appendChild(r)}}function u(e,t,a){var n=a.css,o=a.media,r=a.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),r&&btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var m=null,p=0;function h(e,t){var a,n,o;if(t.singleton){var r=p++;a=m||(m=l(t)),n=b.bind(null,a,r,!1),o=b.bind(null,a,r,!0)}else a=l(t),n=u.bind(null,a,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(a)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var a=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<a.length;n++){var o=s(a[n]);i[o].references--}for(var r=c(e,t),l=0;l<a.length;l++){var d=s(a[l]);0===i[d].references&&(i[d].updater(),i.splice(d,1))}a=r}}}},function(e,t,a){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var a=function(e,t){var a=e[1]||"",n=e[3];if(!n)return a;if(t&&"function"==typeof btoa){var o=(i=n,s=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),r=n.sources.map((function(e){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(e," */")}));return[a].concat(r).concat([o]).join("\n")}var i,s,c;return[a].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(a,"}"):a})).join("")},t.i=function(e,a,n){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(n)for(var r=0;r<this.length;r++){var i=this[r][0];null!=i&&(o[i]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);n&&o[c[0]]||(a&&(c[2]?c[2]="".concat(a," and ").concat(c[2]):c[2]=a),t.push(c))}},t}},function(e,t,a){var n=a(0),o=a(3);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={insert:"head",singleton:!1},i=(n(o,r),o.locals?o.locals:{});e.exports=i},function(e,t,a){(t=a(1)(!1)).push([e.i,".feedback-trigger{width:48px;height:48px;position:fixed;bottom:32px;right:32px;border-radius:50%;z-index:99;background:#fff;cursor:pointer;color:#a8a8a8;-webkit-transition:color 0.3s, -webkit-box-shadow 0.3s;transition:color 0.3s, -webkit-box-shadow 0.3s;-o-transition:color 0.3s, box-shadow 0.3s;transition:color 0.3s, box-shadow 0.3s;transition:color 0.3s, box-shadow 0.3s, -webkit-box-shadow 0.3s;-webkit-box-shadow:0 3px 6px -4px rgba(0,0,0,0.12),0 6px 16px 0 rgba(0,0,0,0.08),0 9px 28px 8px rgba(0,0,0,0.05);box-shadow:0 3px 6px -4px rgba(0,0,0,0.12),0 6px 16px 0 rgba(0,0,0,0.08),0 9px 28px 8px rgba(0,0,0,0.05)}.feedback-trigger:hover{color:#1890ff;-webkit-box-shadow:0 3px 6px -4px rgba(0,0,0,0.17),0 6px 16px 0 rgba(0,0,0,0.13),0 9px 28px 8px rgba(0,0,0,0.1);box-shadow:0 3px 6px -4px rgba(0,0,0,0.17),0 6px 16px 0 rgba(0,0,0,0.13),0 9px 28px 8px rgba(0,0,0,0.1)}.feedback-trigger svg{display:block;width:28px;height:28px;margin:10px auto}\n",""]),e.exports=t},function(e,t,a){var n=a(0),o=a(5);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={insert:"head",singleton:!1},i=(n(o,r),o.locals?o.locals:{});e.exports=i},function(e,t,a){(t=a(1)(!1)).push([e.i,".feedback-modal-container{font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';display:none;color:#333}.feedback-modal-container,.feedback-modal-container *{padding:0;margin:0;-webkit-box-sizing:border-box;box-sizing:border-box;font-size:14px}.feedback-modal-container .feedback-modal-mask{position:fixed;top:0;right:0;bottom:0;left:0;background:rgba(0,0,0,0.6);z-index:9999;overflow:hidden;-webkit-transition:all .3s;-o-transition:all .3s;transition:all .3s}.feedback-modal-container .feedback-modal-mask.enter-start{opacity:0}.feedback-modal-container .feedback-modal-mask.enter-end{opacity:1}.feedback-modal-container .feedback-modal-mask.leave-start{opacity:1}.feedback-modal-container .feedback-modal-mask.leave-end{opacity:0}.feedback-modal-container .feedback-modal-wrap{position:fixed;top:0;right:0;bottom:0;left:0;z-index:9999;pointer-events:none;-webkit-transition:all .3s;-o-transition:all .3s;transition:all .3s}.feedback-modal-container .feedback-modal-wrap.enter-start{opacity:0;-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0)}.feedback-modal-container .feedback-modal-wrap.enter-end{opacity:1;-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1)}.feedback-modal-container .feedback-modal-wrap.leave-start{opacity:1;-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1)}.feedback-modal-container .feedback-modal-wrap.leave-end{opacity:0;-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0)}.feedback-modal-container .feedback-modal{position:relative;width:580px;margin:auto;top:100px;border-radius:4px;background:#fff;overflow:hidden;padding:10px 5px;pointer-events:initial}.feedback-modal-container .feedback-modal .feedback-modal-close{position:absolute;width:48px;height:48px;border:0;outline:0;right:5px;z-index:9;color:rgba(0,0,0,0.45);cursor:pointer;-webkit-transition:color 0.3s;-o-transition:color 0.3s;transition:color 0.3s}.feedback-modal-container .feedback-modal .feedback-modal-close:hover{color:rgba(0,0,0,0.75)}.feedback-modal-container .feedback-modal .feedback-modal-close svg{width:16px;height:16px}.feedback-modal-container .feedback-modal .feedback-modal-header{height:48px;padding:13px 20px;font-size:18px;line-height:22px}.feedback-modal-container .feedback-modal .feedback-modal-body{padding:16px 20px}.feedback-modal-container .feedback-modal .feedback-modal-body textarea{display:block;width:100%;height:140px;padding:8px 12px;border:1px solid #d9d9d9;-webkit-transition:all 0.3s, height 0s;-o-transition:all 0.3s, height 0s;transition:all 0.3s, height 0s;outline:none;border-radius:4px;resize:none;color:#333}.feedback-modal-container .feedback-modal .feedback-modal-body textarea::-webkit-input-placeholder{color:#bfbfbf}.feedback-modal-container .feedback-modal .feedback-modal-body textarea::-moz-placeholder{color:#bfbfbf}.feedback-modal-container .feedback-modal .feedback-modal-body textarea:-ms-input-placeholder{color:#bfbfbf}.feedback-modal-container .feedback-modal .feedback-modal-body textarea::-ms-input-placeholder{color:#bfbfbf}.feedback-modal-container .feedback-modal .feedback-modal-body textarea::placeholder{color:#bfbfbf}.feedback-modal-container .feedback-modal .feedback-modal-body textarea:focus{border-color:#40a9ff;-webkit-box-shadow:0 0 0 2px rgba(24,144,255,0.2);box-shadow:0 0 0 2px rgba(24,144,255,0.2)}.feedback-modal-container .feedback-modal .feedback-modal-footer{padding:10px}.feedback-modal-container .feedback-modal .feedback-modal-footer button{width:140px;height:32px;display:block;margin:auto;color:#fff;outline:none;border:none;background:#1890ff;border-radius:4px;cursor:pointer}.feedback-modal-container .feedback-modal .feedback-modal-footer button:hover{background:#40a9ff}\n",""]),e.exports=t},function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return u}));var n=function e(){var t,a,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),n=function(e){console.log(e)},(a="send")in(t=this)?Object.defineProperty(t,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[a]=n};a(2);function o(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var i=new(function(){function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r(this,"$element",void 0),r(this,"show",(function(){t.$element&&(t.$element.style.display="block")})),r(this,"hide",(function(){t.$element&&(t.$element.style.display="none")})),r(this,"remove",(function(){t.$element&&t.$element.parentElement&&t.$element.parentElement.removeChild(t.$element)}))}var t,a,n;return t=e,(a=[{key:"render",value:function(e){this.remove(),this.$element=document.createElement("div"),this.$element.classList.add("feedback-trigger"),this.$element.innerHTML='<svg t="1584168732107" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3296" width="200" height="200"><path d="M896 981.333333l-213.333333-128H213.333333c-46.933333 0-85.333333-38.4-85.333333-85.333333V128c0-46.933333 38.4-85.333333 85.333333-85.333333h597.333334c46.933333 0 85.333333 38.4 85.333333 85.333333v853.333333zM298.666667 512c-8.533333 0-12.8 0-21.333334 4.266667s-17.066667 17.066667-21.333333 25.6c0 12.8 0 25.6 4.266667 34.133333 55.466667 93.866667 153.6 149.333333 260.266666 149.333333 106.666667 0 204.8-55.466667 260.266667-149.333333 4.266667-8.533333 8.533333-21.333333 4.266667-34.133333-4.266667-12.8-8.533333-21.333333-21.333334-25.6-8.533333-4.266667-12.8-4.266667-21.333333-4.266667-17.066667 0-29.866667 8.533333-38.4 21.333333C665.6 597.333333 597.333333 640 520.533333 640c-76.8 0-145.066667-42.666667-183.466666-106.666667-8.533333-12.8-21.333333-21.333333-38.4-21.333333z" p-id="3297" fill="currentColor"></path></svg>',e.appendChild(this.$element)}},{key:"onClick",value:function(e){this.$element&&this.$element.addEventListener("click",e)}}])&&o(t.prototype,a),n&&o(t,n),e}());function s(e){window.requestAnimationFrame?window.requestAnimationFrame(e):setTimeout(e,17)}a(4);function c(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var d=new(function(){function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),l(this,"$element",void 0),l(this,"$wrap",void 0),l(this,"$mask",void 0),l(this,"hiding",!1),l(this,"showing",!1),l(this,"maskClosable",!0),l(this,"show",(function(e){!t.$element||t.showing||t.hiding||(t.showing=!0,e&&(t.$wrap.style.transformOrigin="".concat(e.x,"px ").concat(e.y,"px")),t.$element.style.display="block",t.$wrap.classList.add("enter-start"),t.$mask.classList.add("enter-start"),s((function(){t.$wrap.classList.add("enter-end"),t.$mask.classList.add("enter-end")})),setTimeout((function(){t.$wrap.classList.remove("enter-start"),t.$wrap.classList.remove("enter-end"),t.$mask.classList.remove("enter-start"),t.$mask.classList.remove("enter-end"),t.showing=!1}),300))})),l(this,"hide",(function(){!t.$element||t.hiding||t.showing||(t.hiding=!0,t.$wrap.classList.add("leave-start"),t.$mask.classList.add("leave-start"),s((function(){t.$wrap.classList.add("leave-end"),t.$mask.classList.add("leave-end")})),setTimeout((function(){t.$wrap.classList.remove("leave-start"),t.$wrap.classList.remove("leave-end"),t.$mask.classList.remove("leave-start"),t.$mask.classList.remove("leave-end"),t.$element.style.display="none",t.hiding=!1}),300))})),l(this,"remove",(function(){t.$element&&t.$element.parentElement&&t.$element.parentElement.removeChild(t.$element)})),l(this,"handleMask",(function(){t.maskClosable&&t.hide()}))}var t,a,n;return t=e,(a=[{key:"render",value:function(e){this.remove(),this.$element=document.createElement("div"),this.$element.classList.add("feedback-modal-container"),this.$element.innerHTML='\n      <div class="feedback-modal-mask"></div>\n      <div class="feedback-modal-wrap">\n        <div class="feedback-modal">\n          <button type="button" aria-label="Close" class="feedback-modal-close">\n            <svg viewBox="64 64 896 896" focusable="false" class="" data-icon="close" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg>\n          </button>\n          <div class="feedback-modal-header">提交反馈</div>\n          <div class="feedback-modal-body">\n            <textarea placeholder="请输入你遇到的问题或建议"></textarea>\n          </div>\n          <div class="feedback-modal-footer">\n            <button type="button" class="feedback-modal-submit">提交</button>\n          </div>\n        </div>\n      </div>\n    ',this.$wrap=this.$element.querySelector(".feedback-modal-wrap"),this.$mask=this.$element.querySelector(".feedback-modal-mask"),this.$mask.addEventListener("click",this.handleMask);var t=this.$element.querySelector(".feedback-modal-close");t&&t.addEventListener("click",this.hide),e.appendChild(this.$element)}}])&&c(t.prototype,a),n&&c(t,n),e}());function f(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var u=function(){function e(t){var a=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),b(this,"request",void 0),b(this,"app",void 0),b(this,"options",{}),b(this,"window",void 0),b(this,"handleTrigger",(function(e){d.show({x:e.pageX,y:e.pageY})})),b(this,"send",(function(e){a.request.send(e)})),this.window=t,this.request=new n}var t,a,o;return t=e,(a=[{key:"init",value:function(e,t){this.options=t,this.app={id:e},this.initTrigger(),this.initModal()}},{key:"initTrigger",value:function(){i.render(document.body),i.onClick(this.options.onClick||this.handleTrigger)}},{key:"initModal",value:function(){d.render(document.body)}}])&&f(t.prototype,a),o&&f(t,o),e}();window.Feedback=new u(window)}]);
//# sourceMappingURL=feedback-0.1.0.js.map